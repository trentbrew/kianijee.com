<script>
  export let name = 'star'
  export let color = 'gray'
  export let size = 24

  let svg

  fetch(`https://www.iconic.rest/api/icons/${name}?size=${size}`).then(res => {
    res.json().then(data => {
      svg = data.svg
    })
  })
</script>

<div style={`width: ${size}px; color: ${color}`}>
  {#if svg}{@html svg}{/if}
</div>

<style>
  svg {
    margin: 0px;
    padding: 0px;
  }
</style>
