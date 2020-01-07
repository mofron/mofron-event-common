# mofron-event-common
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

common event for mofron

set 'addEventListener' to target dom


# Install
```
npm install mofron mofron-event-common
```

# Sample
```html
<require>
    <tag load="mofron-event-common">Common</tag>
</require>

<script name=evt run=init>
    console.log("mouse enter");
</script>

<div size=(1rem,1rem) color2="#f0e6fa">
    <event>
        <Common>(@evt,mouseenter)</Common>
    </event>
</div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | type | string | event type (addEventListener parameter) |

