"use client"

import { useEffect, useState } from 'react'

interface SEOMetrics {
  pageLoadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToFirstByte: number
}

interface SearchConsoleData {
  clicks: number
  impressions: number
  ctr: number
  averagePosition: number
  richResults: {
    faq: number
    reviews: number
    howTo: number
    localBusiness: number
  }
  topQueries: Array<{
    query: string
    clicks: number
    impressions: number
    position: number
  }>
}

interface SEODashboardProps {
  pageUrl: string
  pageTitle: string
  targetKeywords: string[]
  debug?: boolean
}

export default function SEODashboard() {
  return null;
}

export { SEODashboard }; 