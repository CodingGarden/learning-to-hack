# XSS

* What is XSS?
  * Cross Site Scripting
* What are the kinds of XSS?
  * Reflected
  * Stored
  * Blind
* How do we prevent it / fix it?
  * Sanitize User Provided Input!!!
  * Content Security Policy
    * Only load scripts / resources from domains we trust
  * Scenarios where you might be vulnerable:
    * Markdown renderer
      * React - really good markdown renderer that _doesn't_ use dangerouslySetInnerHTML...
    * How to use dangerouslySetInnerHTML or innerHTML safely?
      * Santize / Purify
        * DOMPurify
  * Scanners / Static Code Analysis
* Are we protected if we use libraries?
  * Mostly
    * Libraries have an escape hatch that allows you to directly set HTML, if you use that, you're on your own!
      * React
        * [dangerouslySetInnerHTML](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
      * Vue
        * [v-html](https://vuejs.org/api/built-in-directives.html#v-html)
      * Svelte
        * [@html](https://svelte.dev/docs/special-tags#html)

## Juice Box

* 