# POS Application Blueprint

## Overview

This document outlines the structure, features, and design of a Point of Sale (POS) application built with Next.js and Firebase.

## Project Outline

### Style and Design

*   **Framework:** Next.js with App Router
*   **Styling:** Tailwind CSS with shadcn/ui components
*   **UI Components:**
    *   `Card`: Used for product display and admin dashboard stats.
    *   `Button`: Used for actions like "Add to Cart" and navigation.
    *   `Input`: For forms.
    *   `Label`: For form inputs.
*   **Icons:** `lucide-react` for iconography.
*   **Layout:**
    *   A global header with navigation.
    *   A main content area with padding.
    *   Responsive grid layouts for product listings and admin stats.
*   **Color Palette:** Using shadcn/ui's "Neutral" base color.
*   **Typography:** Using `Geist` and `Geist_Mono` fonts.

### Features

#### Customer Facing

*   **Product Listings Page (`/`)**:
    *   Displays a grid of products.
    *   Each product is displayed in a `ProductCard`.
    *   Each `ProductCard` shows the product name, description, price, and an "Add to Cart" button.

#### Admin Section

*   **Admin Dashboard (`/admin`)**:
    *   Provides a summary of key metrics:
        *   Products
        *   Sales
        *   Income
    *   Uses `Card` components to display these stats with icons from `lucide-react`.
    *   Links to the products management page.
*   **Products Management (`/admin/products`)**:
    *   A page to manage products (not yet fully implemented).

## Current Plan

The current request was to build a POS application with an admin and customer section. This has been completed with the initial setup of the following:

*   **Customer-facing shop page:** Displays a list of products.
*   **Admin dashboard:** Displays statistics for products, sales, and income.

The design has been implemented using `shadcn/ui` components and a modern, clean aesthetic has been applied.

