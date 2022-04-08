1. how to add comments on css?
```
We can add comments on css using /* */.
```

2. Why do we use pseudo-class?
```A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).

button:hover {
  color: blue;
}
```

3. How is specificity applied?
```
Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors.


The following list of selector types increases by specificity:

Type selectors (e.g., h1) and pseudo-elements (e.g., ::before).
Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
ID selectors (e.g., #example).
```

4. What method allows an element to be moved from its current position?
```
The translate() method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).
```

5. what properties does flex model have?
```
flex model have following properties
1. flex-grow
2. flex-shrink
3. flex-basis
```


6. What is the difference between flex and grids?
```
Grid and flexbox. The basic difference between CSS Grid Layout and CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.
```

7. Give an example where we have to use grids and where you have to use flexbox?
```
If we have a layout in mind, grid would be more suitable while flexbox would be more suitable if we want to have more fluid design like space in between two elements on large screen and is reduced with screen size.
```

8. Give an example where you cannot use flexbox, and you can only use grids?
```
if we want to display different no of elements and/or in different order on different screen sizes then we can only use grid.
```

9. What are combinators? give examples of how you can use them
```
Combinators are a way to select only specific elements by using there relations with other elements
There are following 5 type of combinators

. => element type & class => div.box
+ => Adjacent sibling selector => div + p
~ => Adjacent sibling selector => div ~ p
> => Child Combinator => div > p
" " => Descendent Combinator => div p
```

10. What does object-fit do?
```
The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.

You can alter the alignment of the replaced element's content object within the element's box using the object-position property.
```

11. What does rotate do?
```
The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. 
```

12. What rule can be used to define animations
```
We use @keyframes to define animations rule.
```

13. When working with attribute selectors, how can you select elements which contain a particular attribute value?
```
We can use the [attribute] selector to select element with a particular attribute value.
```

14. What does @media do?
```
The @media CSS at-rule can be used to apply part of a style sheet based on the result of one or more media queries. With it, we specify a media query and a block of CSS to apply to the document if and only if the media query matches the device on which the content is being used.

e.g. @media screen or @supports (display: flex)
```

15. What can be used to override properties of an element
```
We can use "!important" directive to override properties of an element.
```

16. How can you select every alternate elements in a list of elements using css?
```
We can use nth-child pseudo class for selecting alternate elements in a list

i) We can select even element using li:nth-child(2n) or li:nth-child(even)

ii) We can select odd element using li:nth-child(2n+1) or li:nth-child(odd)
```

17. What is the ranking of selectors with respect to specificity
```
Raning of selectors with respect to specificty with highest first is as follows
i) inline
ii) id
iii) class
iv) attributes
v) elements
```

18. how can we apply same styles to multiple selectors?
```
We can mentione multiple selectors seperated by comma to apply same style on them.

e.g. .class1, #id2 {
    color: red
}
```

19. What are the differences between relative and absolute in CSS?
```
An element with position: relative; is positioned relative to its normal or original position.

An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
```