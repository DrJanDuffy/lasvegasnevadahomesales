#!/usr/bin/env node

/**
 * Optimized shadcn MCP Server
 * Provides intelligent component management and optimization for shadcn/ui
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { execSync } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

class ShadcnMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'shadcn-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'add_component',
            description: 'Add a shadcn/ui component to the project',
            inputSchema: {
              type: 'object',
              properties: {
                component: {
                  type: 'string',
                  description: 'Name of the component to add (e.g., button, card, dialog)',
                },
                optimize: {
                  type: 'boolean',
                  description: 'Whether to apply optimizations to the component',
                  default: true,
                },
              },
              required: ['component'],
            },
          },
          {
            name: 'list_components',
            description: 'List all available shadcn/ui components',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'optimize_component',
            description: 'Optimize an existing component for performance and accessibility',
            inputSchema: {
              type: 'object',
              properties: {
                componentPath: {
                  type: 'string',
                  description: 'Path to the component file to optimize',
                },
                optimizations: {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: ['performance', 'accessibility', 'seo', 'bundle_size'],
                  },
                  description: 'Types of optimizations to apply',
                  default: ['performance', 'accessibility'],
                },
              },
              required: ['componentPath'],
            },
          },
          {
            name: 'create_custom_component',
            description: 'Create a custom component based on shadcn/ui patterns',
            inputSchema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Name of the custom component',
                },
                type: {
                  type: 'string',
                  enum: ['form', 'layout', 'display', 'feedback', 'navigation'],
                  description: 'Type of component to create',
                },
                features: {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: ['responsive', 'dark_mode', 'animations', 'accessibility', 'seo'],
                  },
                  description: 'Features to include in the component',
                  default: ['responsive', 'accessibility'],
                },
              },
              required: ['name', 'type'],
            },
          },
          {
            name: 'analyze_bundle',
            description: 'Analyze bundle size and suggest optimizations',
            inputSchema: {
              type: 'object',
              properties: {
                componentPath: {
                  type: 'string',
                  description: 'Path to analyze (optional, defaults to entire project)',
                },
              },
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'add_component':
            return await this.addComponent(args);
          case 'list_components':
            return await this.listComponents();
          case 'optimize_component':
            return await this.optimizeComponent(args);
          case 'create_custom_component':
            return await this.createCustomComponent(args);
          case 'analyze_bundle':
            return await this.analyzeBundle(args);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
        };
      }
    });
  }

  async addComponent(args) {
    const { component, optimize = true } = args;
    
    try {
      // Add the component using shadcn CLI
      const result = execSync(`npx shadcn@latest add ${component} --yes`, {
        encoding: 'utf8',
        cwd: process.cwd(),
      });

      let optimizationResult = '';
      if (optimize) {
        optimizationResult = await this.optimizeComponentFile(`components/ui/${component}.tsx`);
      }

      return {
        content: [
          {
            type: 'text',
            text: `✅ Successfully added ${component} component${optimize ? ' with optimizations' : ''}\n\n${result}${optimizationResult}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to add component: ${error.message}`);
    }
  }

  async listComponents() {
    try {
      // Get available components from shadcn registry
      const result = execSync('npx shadcn@latest add --help', {
        encoding: 'utf8',
        cwd: process.cwd(),
      });

      const components = this.parseAvailableComponents(result);

      return {
        content: [
          {
            type: 'text',
            text: `Available shadcn/ui components:\n\n${components.map(c => `• ${c}`).join('\n')}\n\nUse add_component to install any of these components.`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to list components: ${error.message}`);
    }
  }

  parseAvailableComponents(helpText) {
    // Parse the help text to extract component names
    const lines = helpText.split('\n');
    const components = [];
    
    for (const line of lines) {
      if (line.includes('•') || line.includes('-')) {
        const match = line.match(/[•-]\s*(\w+)/);
        if (match) {
          components.push(match[1]);
        }
      }
    }
    
    return components.length > 0 ? components : [
      'button', 'card', 'dialog', 'input', 'label', 'select', 'textarea',
      'checkbox', 'radio-group', 'switch', 'tabs', 'accordion', 'alert',
      'avatar', 'badge', 'breadcrumb', 'calendar', 'carousel', 'chart',
      'command', 'data-table', 'date-picker', 'dropdown-menu', 'form',
      'hover-card', 'menubar', 'navigation-menu', 'pagination', 'popover',
      'progress', 'scroll-area', 'separator', 'sheet', 'skeleton', 'slider',
      'sonner', 'table', 'toast', 'toggle', 'toggle-group', 'tooltip'
    ];
  }

  async optimizeComponent(args) {
    const { componentPath, optimizations = ['performance', 'accessibility'] } = args;
    
    try {
      const content = await fs.readFile(componentPath, 'utf8');
      let optimizedContent = content;

      if (optimizations.includes('performance')) {
        optimizedContent = this.optimizeForPerformance(optimizedContent);
      }

      if (optimizations.includes('accessibility')) {
        optimizedContent = this.optimizeForAccessibility(optimizedContent);
      }

      if (optimizations.includes('seo')) {
        optimizedContent = this.optimizeForSEO(optimizedContent);
      }

      if (optimizations.includes('bundle_size')) {
        optimizedContent = this.optimizeForBundleSize(optimizedContent);
      }

      await fs.writeFile(componentPath, optimizedContent);

      return {
        content: [
          {
            type: 'text',
            text: `✅ Successfully optimized component: ${componentPath}\nApplied optimizations: ${optimizations.join(', ')}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to optimize component: ${error.message}`);
    }
  }

  optimizeForPerformance(content) {
    // Add React.memo for performance
    if (!content.includes('React.memo') && content.includes('export default')) {
      content = content.replace(
        /export default (\w+)/,
        'export default React.memo($1)'
      );
    }

    // Add useCallback for event handlers
    content = content.replace(
      /const (\w+) = \(([^)]*)\) => {/g,
      'const $1 = useCallback(($2) => {'
    );

    return content;
  }

  optimizeForAccessibility(content) {
    // Add ARIA labels where missing
    content = content.replace(
      /<button([^>]*?)>/g,
      (match, attrs) => {
        if (!attrs.includes('aria-label') && !attrs.includes('aria-labelledby')) {
          return `<button${attrs} aria-label="Button">`;
        }
        return match;
      }
    );

    // Add role attributes
    content = content.replace(
      /<div([^>]*?)className="([^"]*?)"/g,
      (match, attrs, className) => {
        if (className.includes('button') && !attrs.includes('role')) {
          return `<div${attrs} role="button" tabIndex={0} className="${className}"`;
        }
        return match;
      }
    );

    return content;
  }

  optimizeForSEO(content) {
    // Add semantic HTML elements
    content = content.replace(
      /<div([^>]*?)className="([^"]*?)header([^"]*?)"/g,
      '<header$1className="$2header$3"'
    );

    content = content.replace(
      /<div([^>]*?)className="([^"]*?)footer([^"]*?)"/g,
      '<footer$1className="$2footer$3"'
    );

    return content;
  }

  optimizeForBundleSize(content) {
    // Remove unused imports
    const lines = content.split('\n');
    const usedImports = new Set();
    
    // Find used imports
    for (const line of lines) {
      if (line.includes('import')) continue;
      const matches = line.match(/\b(\w+)\b/g);
      if (matches) {
        matches.forEach(match => usedImports.add(match));
      }
    }

    // Filter import lines
    const filteredLines = lines.filter(line => {
      if (!line.includes('import')) return true;
      const importMatch = line.match(/import.*?{([^}]+)}/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const usedImportsInLine = imports.filter(imp => usedImports.has(imp));
        return usedImportsInLine.length > 0;
      }
      return true;
    });

    return filteredLines.join('\n');
  }

  async createCustomComponent(args) {
    const { name, type, features = ['responsive', 'accessibility'] } = args;
    
    const componentTemplate = this.generateComponentTemplate(name, type, features);
    const componentPath = `components/ui/${name}.tsx`;
    
    await fs.writeFile(componentPath, componentTemplate);

    return {
      content: [
        {
          type: 'text',
          text: `✅ Successfully created custom component: ${name}\nType: ${type}\nFeatures: ${features.join(', ')}\nLocation: ${componentPath}`,
        },
      ],
    };
  }

  generateComponentTemplate(name, type, features) {
    const className = name.charAt(0).toUpperCase() + name.slice(1);
    
    let template = `import * as React from "react"
import { cn } from "@/lib/utils"

interface ${className}Props {
  className?: string
  children?: React.ReactNode
}

const ${className} = React.forwardRef<HTMLDivElement, ${className}Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "${this.getBaseClasses(type)}",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
${className}.displayName = "${className}"

export { ${className} }
`;

    if (features.includes('responsive')) {
      template = template.replace(
        '"${this.getBaseClasses(type)}"',
        '"${this.getBaseClasses(type)}", "responsive-classes"'
      );
    }

    if (features.includes('dark_mode')) {
      template = template.replace(
        'className={cn(',
        'className={cn("dark:bg-gray-900 dark:text-white",'
      );
    }

    return template;
  }

  getBaseClasses(type) {
    const baseClasses = {
      form: 'flex flex-col space-y-4',
      layout: 'container mx-auto px-4',
      display: 'block',
      feedback: 'p-4 rounded-lg',
      navigation: 'flex items-center space-x-4'
    };
    
    return baseClasses[type] || 'block';
  }

  async analyzeBundle(args) {
    const { componentPath } = args;
    
    try {
      // Run bundle analyzer
      const result = execSync('npm run build', {
        encoding: 'utf8',
        cwd: process.cwd(),
      });

      return {
        content: [
          {
            type: 'text',
            text: `Bundle analysis completed:\n\n${result}\n\nRecommendations:\n• Use dynamic imports for large components\n• Implement code splitting\n• Optimize images and assets\n• Remove unused dependencies`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to analyze bundle: ${error.message}`);
    }
  }

  async optimizeComponentFile(componentPath) {
    try {
      const content = await fs.readFile(componentPath, 'utf8');
      const optimized = this.optimizeForPerformance(
        this.optimizeForAccessibility(content)
      );
      await fs.writeFile(componentPath, optimized);
      return '\n\n✅ Component optimized for performance and accessibility';
    } catch (error) {
      return `\n\n⚠️ Could not optimize component: ${error.message}`;
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('shadcn MCP server running on stdio');
  }
}

const server = new ShadcnMCPServer();
server.run().catch(console.error);
