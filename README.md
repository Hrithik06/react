This is my react repo. I'm learning react and going through a course. I will be posting the things I learn on the course in this repo. Putting out what I learn out in the world.
## Parcel
- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm (written in C++)
- Caching (Faster Builds)
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling (support older browsers)
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking (remove unused code)
- Different dev and prod bundles


## Delivery App

Header
  - Logo
  - Nav Items

Body
  - Search
  - RestaurantContainer
      - RestaurantCard
  - Image
  - Name of Res, Star Rating, cuisine, delivery time

Footer
  - Copyright
  - Links
  - Contact


## Two types of Export/Import
### Default Export/Import

    export default Component; 
    import Component from "path";
### Named Export/Import
When exporting multiple things use named export.
    
    export const Component; 
    import {Component} from "path":


Can we use default export along with named export?