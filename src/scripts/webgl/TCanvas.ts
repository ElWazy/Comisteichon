import * as THREE from 'three'
import { gl } from './core/WebGL'
import { type Assets, loadAssets } from './utils/assetLoader'
import { controls } from './utils/OrbitControls'
import vertexShader from './shader/vs.glsl'
import fragmentShader from './shader/fs.glsl'
import { calcCoveredTextureScale } from './utils/coveredTexture'

export class TCanvas {
  private assets: Assets = {
    image: { path: 'inspector.jpg' },
  }

  constructor(private container: HTMLElement) {
    loadAssets(this.assets).then(() => {
      this.init()
      this.createObjects()
      gl.requestAnimationFrame(this.anime)
    })
  }

  private init() {
    gl.setup(this.container)
    gl.camera.position.z = 1.5
  }

  private createObjects() {
    const texture = this.assets.image.data as THREE.Texture
    const scale = calcCoveredTextureScale(texture, 1 / 1)

    const geometry = new THREE.PlaneGeometry(1, 1)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        tImage: { value: texture },
        uUvScale: { value: new THREE.Vector2(scale[0], scale[1]) },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
    })
    const mesh = new THREE.Mesh(geometry, material)

    gl.scene.add(mesh)
  }

  private anime = () => {
    controls.update()
    gl.render()
  }

    dispose() {
    gl.dispose()
  }
}
