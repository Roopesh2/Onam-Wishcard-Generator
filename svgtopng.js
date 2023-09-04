
import { Canvg, presets } from 'https://cdn.skypack.dev/canvg@^4.0.0'
/**
 * 
 * @param {SVGAElement} svg 
 * @param {*} callback 
 */
window.svgToPng = async function svgToPng (svg, callback) {
  const preset = presets.offscreen()
  let {width, height} = svg.getBBox();
  const canvas = new OffscreenCanvas(width, height)
  const ctx = canvas.getContext('2d')
  const v = await Canvg.from(ctx, svg.outerHTML, preset)

  // Render only first frame, ignoring animations and mouse.
  await v.render()

  const blob = await canvas.convertToBlob()
  const pngUrl = URL.createObjectURL(blob)
  console.log(pngUrl);
  let i = document.createElement("img");
  i.src = pngUrl;
  document.body.appendChild(i)
}