# presentation-drawer

The Augmented.js Next - Presentation Drawer Module.

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [DrawerView](#drawerview)
    -   [Parameters](#parameters)
    -   [content](#content)
        -   [Parameters](#parameters-1)
    -   [innerdrawer](#innerdrawer)
        -   [Parameters](#parameters-2)
    -   [render](#render)

## DrawerView

**Extends DirectiveView**

A simple drawer with a sliding content drawer window.
Currently only supports drawers to the right of the main box.
<br/>

Supported options:

<ul>
<li>content - The main content window</li>
<li>drawer - The slide-out drawer content</li>
</ul>

### Parameters

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options for the class

### content

The callback method for clicking/tapping the main content box

#### Parameters

-   `e` **[Event](https://developer.mozilla.org/docs/Web/API/Event)** The standard event

Returns **[DrawerView](#drawerview)** Returns 'this'

### innerdrawer

The callback method for clicking/tapping the innerdrawer

#### Parameters

-   `e` **[Event](https://developer.mozilla.org/docs/Web/API/Event)** The standard event

Returns **[DrawerView](#drawerview)** Returns 'this'

### render

Main render method

Returns **[DrawerView](#drawerview)** Returns 'this'
