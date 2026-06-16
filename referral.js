/**
 * CannaLaunch Referral Tracking — referral.js
 * ============================================================
 * HOW REFERRAL LINKS WORK:
 *   Send visitors to: cannalaunch.org/?ref=mike
 *   Their referral code is saved for 30 days.
 *   Every "Buy Now" button they click goes to that vendor's
 *   Payhip affiliate link instead of the default link.
 *
 * HOW TO ADD A NEW VENDOR:
 *   1. Find the vendor's Payhip affiliate code (from your
 *      Payhip dashboard → Affiliates).
 *   2. Copy the 'mike' block below and paste it inside VENDORS.
 *   3. Change 'mike' to the new vendor's referral code.
 *   4. Replace MIKE_AFFILIATE_CODE with their affiliate code.
 *   5. Save this file and redeploy.
 *
 * HOW TO FIND PAYHIP AFFILIATE LINKS:
 *   Payhip affiliate links follow this format:
 *   https://payhip.com/b/PRODUCT_ID?affiliate=AFFILIATE_CODE
 *   The PRODUCT_ID is already filled in below.
 *   You only need to replace MIKE_AFFILIATE_CODE (etc.) with
 *   each vendor's actual affiliate code from Payhip.
 *
 * REFERRAL CODE FORMAT:
 *   - Lowercase only (URLs are case-insensitive, codes are lowercased automatically)
 *   - No spaces, use hyphens if needed (e.g. 'mike-jones')
 *   - Keep it short and simple (e.g. 'mike', 'sarah', 'vendor2')
 * ============================================================
 */

(function () {
  'use strict';

  // ══════════════════════════════════════════════════════════
  // VENDOR AFFILIATE LINKS
  // ══════════════════════════════════════════════════════════
  // Structure: 'referral-code': { 'payhip-product-id': 'affiliate-url' }
  // Each product ID matches the ID in the Payhip URL (payhip.com/b/PRODUCT_ID).
  // Replace every instance of MIKE_AFFILIATE_CODE with the real code from Payhip.

  var VENDORS = {

    'korey': {
      'P6dxr': 'https://payhip.com/b/P6dxr?affiliate=MIKE_AFFILIATE_CODE',  // Operators Blueprint
      'wAyCx': 'https://payhip.com/b/wAyCx?affiliate=MIKE_AFFILIATE_CODE',  // Full Operations Playbook
      'UT8HP': 'https://payhip.com/b/UT8HP?affiliate=MIKE_AFFILIATE_CODE',  // KPI Dashboard
      'TQXf3': 'https://payhip.com/b/TQXf3?affiliate=MIKE_AFFILIATE_CODE',  // Inventory Performance Tracker
      '76iVt': 'https://payhip.com/b/76iVt?affiliate=MIKE_AFFILIATE_CODE',  // Sales & Product Performance Report
      'CvTtd': 'https://payhip.com/b/CvTtd?affiliate=MIKE_AFFILIATE_CODE',  // Days-on-Hand Calculator
      'fP9Bc': 'https://payhip.com/b/fP9Bc?affiliate=MIKE_AFFILIATE_CODE',  // COGS & Margin Tracker
      'a9lhv': 'https://payhip.com/b/a9lhv?affiliate=MIKE_AFFILIATE_CODE',  // Daily Operations Checklist
      'eGcWC': 'https://payhip.com/b/eGcWC?affiliate=MIKE_AFFILIATE_CODE',  // Inventory Audit Checklist & Log
      '5b8v6': 'https://payhip.com/b/5b8v6?affiliate=MIKE_AFFILIATE_CODE',  // Operational Issue Resolution Log
      'oMPaR': 'https://payhip.com/b/oMPaR?affiliate=MIKE_AFFILIATE_CODE',  // Shift Performance Tracker
      'IJS4n': 'https://payhip.com/b/IJS4n?affiliate=MIKE_AFFILIATE_CODE',  // Staff Training Tracker
      'DUnWI': 'https://payhip.com/b/DUnWI?affiliate=MIKE_AFFILIATE_CODE',  // Weekly Operations Planner
      '0yKqi': 'https://payhip.com/b/0yKqi?affiliate=MIKE_AFFILIATE_CODE',  // Compliance Audit Log
      'PY4Iv': 'https://payhip.com/b/PY4Iv?affiliate=MIKE_AFFILIATE_CODE',  // Incident Report Template
      '94GkY': 'https://payhip.com/b/94GkY?affiliate=MIKE_AFFILIATE_CODE',  // Customer Feedback / Issue Log
      'OduAe': 'https://payhip.com/b/OduAe?affiliate=MIKE_AFFILIATE_CODE',  // Promotion Performance Tracker
      'kUfDa': 'https://payhip.com/b/kUfDa?affiliate=MIKE_AFFILIATE_CODE',  // Full Template System (bundle)
      'AI45k': 'https://payhip.com/b/AI45k?affiliate=MIKE_AFFILIATE_CODE',  // Full Operations System (bundle)
    },

    // ── VENDOR 2 ───────────────────────────────────────────
    // Replace 'vendor2' with their referral code (e.g. 'sarah')
    // Replace VENDOR2_AFFILIATE_CODE with their Payhip affiliate code
    'vendor2': {
      'P6dxr': 'https://payhip.com/b/P6dxr?affiliate=VENDOR2_AFFILIATE_CODE',
      'wAyCx': 'https://payhip.com/b/wAyCx?affiliate=VENDOR2_AFFILIATE_CODE',
      'UT8HP': 'https://payhip.com/b/UT8HP?affiliate=VENDOR2_AFFILIATE_CODE',
      'TQXf3': 'https://payhip.com/b/TQXf3?affiliate=VENDOR2_AFFILIATE_CODE',
      '76iVt': 'https://payhip.com/b/76iVt?affiliate=VENDOR2_AFFILIATE_CODE',
      'CvTtd': 'https://payhip.com/b/CvTtd?affiliate=VENDOR2_AFFILIATE_CODE',
      'fP9Bc': 'https://payhip.com/b/fP9Bc?affiliate=VENDOR2_AFFILIATE_CODE',
      'a9lhv': 'https://payhip.com/b/a9lhv?affiliate=VENDOR2_AFFILIATE_CODE',
      'eGcWC': 'https://payhip.com/b/eGcWC?affiliate=VENDOR2_AFFILIATE_CODE',
      '5b8v6': 'https://payhip.com/b/5b8v6?affiliate=VENDOR2_AFFILIATE_CODE',
      'oMPaR': 'https://payhip.com/b/oMPaR?affiliate=VENDOR2_AFFILIATE_CODE',
      'IJS4n': 'https://payhip.com/b/IJS4n?affiliate=VENDOR2_AFFILIATE_CODE',
      'DUnWI': 'https://payhip.com/b/DUnWI?affiliate=VENDOR2_AFFILIATE_CODE',
      '0yKqi': 'https://payhip.com/b/0yKqi?affiliate=VENDOR2_AFFILIATE_CODE',
      'PY4Iv': 'https://payhip.com/b/PY4Iv?affiliate=VENDOR2_AFFILIATE_CODE',
      '94GkY': 'https://payhip.com/b/94GkY?affiliate=VENDOR2_AFFILIATE_CODE',
      'OduAe': 'https://payhip.com/b/OduAe?affiliate=VENDOR2_AFFILIATE_CODE',
      'kUfDa': 'https://payhip.com/b/kUfDa?affiliate=VENDOR2_AFFILIATE_CODE',
      'AI45k': 'https://payhip.com/b/AI45k?affiliate=VENDOR2_AFFILIATE_CODE',
    },

    // ── VENDOR 3 ───────────────────────────────────────────
    'vendor3': {
      'P6dxr': 'https://payhip.com/b/P6dxr?affiliate=VENDOR3_AFFILIATE_CODE',
      'wAyCx': 'https://payhip.com/b/wAyCx?affiliate=VENDOR3_AFFILIATE_CODE',
      'UT8HP': 'https://payhip.com/b/UT8HP?affiliate=VENDOR3_AFFILIATE_CODE',
      'TQXf3': 'https://payhip.com/b/TQXf3?affiliate=VENDOR3_AFFILIATE_CODE',
      '76iVt': 'https://payhip.com/b/76iVt?affiliate=VENDOR3_AFFILIATE_CODE',
      'CvTtd': 'https://payhip.com/b/CvTtd?affiliate=VENDOR3_AFFILIATE_CODE',
      'fP9Bc': 'https://payhip.com/b/fP9Bc?affiliate=VENDOR3_AFFILIATE_CODE',
      'a9lhv': 'https://payhip.com/b/a9lhv?affiliate=VENDOR3_AFFILIATE_CODE',
      'eGcWC': 'https://payhip.com/b/eGcWC?affiliate=VENDOR3_AFFILIATE_CODE',
      '5b8v6': 'https://payhip.com/b/5b8v6?affiliate=VENDOR3_AFFILIATE_CODE',
      'oMPaR': 'https://payhip.com/b/oMPaR?affiliate=VENDOR3_AFFILIATE_CODE',
      'IJS4n': 'https://payhip.com/b/IJS4n?affiliate=VENDOR3_AFFILIATE_CODE',
      'DUnWI': 'https://payhip.com/b/DUnWI?affiliate=VENDOR3_AFFILIATE_CODE',
      '0yKqi': 'https://payhip.com/b/0yKqi?affiliate=VENDOR3_AFFILIATE_CODE',
      'PY4Iv': 'https://payhip.com/b/PY4Iv?affiliate=VENDOR3_AFFILIATE_CODE',
      '94GkY': 'https://payhip.com/b/94GkY?affiliate=VENDOR3_AFFILIATE_CODE',
      'OduAe': 'https://payhip.com/b/OduAe?affiliate=VENDOR3_AFFILIATE_CODE',
      'kUfDa': 'https://payhip.com/b/kUfDa?affiliate=VENDOR3_AFFILIATE_CODE',
      'AI45k': 'https://payhip.com/b/AI45k?affiliate=VENDOR3_AFFILIATE_CODE',
    },

  };
  // ══════════════════════════════════════════════════════════
  // END OF VENDOR CONFIG — do not edit below this line
  // unless you know what you're doing
  // ══════════════════════════════════════════════════════════

  var STORAGE_KEY = 'cl_ref';
  var COOKIE_DAYS = 30;

  /** Save a referral code to localStorage + cookie */
  function saveReferral(code) {
    code = String(code).toLowerCase().trim();
    if (!code) return;
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {}
    var expires = new Date();
    expires.setDate(expires.getDate() + COOKIE_DAYS);
    document.cookie = STORAGE_KEY + '=' + encodeURIComponent(code) +
      '; expires=' + expires.toUTCString() + '; path=/; SameSite=Lax';
  }

  /** Read back the stored referral code (localStorage first, then cookie) */
  function getReferral() {
    try {
      var ls = localStorage.getItem(STORAGE_KEY);
      if (ls) return ls;
    } catch (e) {}
    var m = document.cookie.match('(?:^|;)\\s*' + STORAGE_KEY + '=([^;]*)');
    return m ? decodeURIComponent(m[1]) : null;
  }

  /** Read ?ref= from the current page URL */
  function detectRefFromURL() {
    try {
      return new URLSearchParams(window.location.search).get('ref') || null;
    } catch (e) {
      var m = window.location.search.match('[?&]ref=([^&]+)');
      return m ? decodeURIComponent(m[1]) : null;
    }
  }

  /**
   * Get the correct checkout URL for a product.
   * @param {string} productId   - Payhip product ID (e.g. "P6dxr")
   * @param {string} defaultURL  - The normal Payhip link to use as fallback
   */
  function getCheckoutURL(productId, defaultURL) {
    var ref = getReferral();
    if (ref && VENDORS[ref] && VENDORS[ref][productId]) {
      return VENDORS[ref][productId];
    }
    return defaultURL || ('https://payhip.com/b/' + productId);
  }

  /** Update every Buy Now button href based on stored referral code */
  function initButtons() {
    var buttons = document.querySelectorAll('a[data-product]');
    for (var i = 0; i < buttons.length; i++) {
      var btn       = buttons[i];
      var productId = btn.getAttribute('data-product');
      var fallback  = btn.getAttribute('data-default-url') || btn.href;
      btn.href = getCheckoutURL(productId, fallback);
    }
  }

  /** Fill any hidden referral fields in contact/booking forms */
  function initForms() {
    var ref    = getReferral() || '';
    var fields = document.querySelectorAll('input[name="referral_source"]');
    for (var i = 0; i < fields.length; i++) {
      fields[i].value = ref;
    }
  }

  function init() {
    var urlRef = detectRefFromURL();
    if (urlRef) saveReferral(urlRef);
    initButtons();
    initForms();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API — accessible from browser console for debugging
  // e.g. CannaLaunchRef.getReferral() → "mike"
  window.CannaLaunchRef = {
    getReferral:    getReferral,
    getCheckoutURL: getCheckoutURL,
  };

}());
