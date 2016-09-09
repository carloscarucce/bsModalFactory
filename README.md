# bsModalFactory
A simple way to deal with Bootstrap modals

**Requeriments:**

- jQuery (http://jquery.com).
- Bootstrap 3 + Modal JS package (http://getbootstrap.com).

---

## Usage example:

```
var myModal = bsModalFactory.build();
myModal.setTitle('Example');
myModal.setBodyContents('Hello world!');
myModal.show();
```
---

## Options:

- **appendTo** (jQuery selector/DOM element): set who will be the parent node. Default: window.body;
- **fading** (boolean) : Turns faading effect on/off. Default: true;
- **id** (mixed) : set 'id' attribute content for main div;
- **width** (mixed) : set modal width (px, %, etc...)
- **showsOnBuild** (boolean) : execute `show` right after build automatically. Default: false;
- **showHeader** (boolean) : display a header. Default: true;
- **closeButton** (boolean) : put a close button in the header. Default: true;
- **title** (string) : the title that will appear in the header. Also set with `setTitle` method;
- **contents** (string) : the html content. Also set with `setBodyContents`;

---

## Methods:

- **applyBSOptions** Apply bootstrap options to the modal (Ref: http://getbootstrap.com/javascript/#modals-options)
- **getDOM** Get the created dom element
- **hide** Hide window
- **on** Listen to events. (Ref: http://getbootstrap.com/javascript/#modals-events)
- **setTitle** Set modal title
- **setWidth** Set modal width
- **setBodyContents** Set html contents for the modal
- **show** Shows modal
