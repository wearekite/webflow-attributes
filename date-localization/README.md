Here is an updated README.md:

# Date Localization

This code localizes dates in HTML elements for use in Webflow. It can also be used in any web project.

It targets elements with the `wunder-loc-element="date"` attribute. This is the only required attribute.

It loops through all elements with this attribute and localizes the date based on the following optional attributes:
- `wunder-loc-language` - The language to localize to (e.g. "en-US")  
- `wunder-loc-format` - Either `long`, `short`, or `custom`

If `wunder-loc-format` is `custom`
- `wunder-loc-year` - Custom year formatting (e.g. "numeric") 
- `wunder-loc-month` - Custom month formatting
- `wunder-loc-day` - Custom day formatting
- `wunder-loc-weekday` - Custom weekday formatting

It uses `Date.toLocaleDateString()` to localize the dates based on the provided options. 

If no options are provided, it will use the default locale.

So in summary:
- Add `wunder-loc-element="date"` to any element containing a date
- Optionally add language and/or format options
- The code will handle localizing the date on that element