#!/usr/bin/env python3
"""
Screenshot capture script for visual SEO analysis using Playwright
"""
from playwright.sync_api import sync_playwright
import sys

def capture(url, output_path, viewport_width=1920, viewport_height=1080, full_page=False):
    """Capture screenshot of a URL with specified viewport"""
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle')
        page.screenshot(path=output_path, full_page=full_page)
        browser.close()
        print(f"✓ Screenshot saved: {output_path}")

if __name__ == "__main__":
    url = sys.argv[1] if len(sys.argv) > 1 else "https://www.psimanufehr.com/"
    
    # Capture desktop view (above-the-fold)
    capture(url, "screenshots/desktop_1920x1080.png", 1920, 1080, False)
    
    # Capture mobile view (above-the-fold)
    capture(url, "screenshots/mobile_375x812.png", 375, 812, False)
    
    # Capture desktop full page
    capture(url, "screenshots/desktop_full.png", 1920, 1080, True)
    
    # Capture mobile full page
    capture(url, "screenshots/mobile_full.png", 375, 812, True)
    
    print("\n✓ All screenshots captured successfully!")
