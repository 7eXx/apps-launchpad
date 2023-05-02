# Apps Launchpad
This application aims to create a web component that has the same behavior of google launchpad.
See the main google page with shortcut in top right

## Usage
The tag for the custom component:
```angular2html
<apps-launchpad></apps-launchpad>
```
you can project your custom button using
```angular2html
<apps-launchpad>
  <button slot="toggle-button"
      type="button" class="btn btn-primary">
    <span class="fa fa-th"></span>
  </button>
</apps-launchpad>
```
so you can use whatever style you want for the toggle button.  
Then retrieve the html element end edit the items attribute to pass a list of links and titles.
```
const items = [{
  uri: 'https://app.telegestione.frigoveneta.it',
  iconClass: '',
  iconImage: 'assets/WebGest Remote.svg',
  label: 'WebGest'
}, { ... }];
let launchpad = document.querySelector('#apps-launchpad');
launchpad.items = items;
```

## Screenshot
![record-1](https://github.com/7eXx/apps-launchpad/blob/master/screenshot/record-1.gif)

