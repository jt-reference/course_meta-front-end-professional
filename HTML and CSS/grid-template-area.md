# Grid template area

Grid areas are a way to group one or more grid cells. The grid template area is an extension of this concept where you can give names to these grid areas. Once you have the names defined, you can address these new grid area items by their names and configure them accordingly.

The property grid-template-areas is usually placed inside the body tag or any container where the grid needs to be placed, the same way that you would define the rules for the grid. The main difference is, in case of grid-template-areas the values present will be the different names.

Process
The process isn’t prescriptive but these are the steps in general:

Define the grid using display property

Set the height and width of the grid

Set the grid-template-areas with the appropriate name identifiers

Add the appropriate sizes for the rows inside the grid using grid-template-rows property

Add the appropriate sizes for the columns inside the grid using grid-template-columns property
