import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <div className='navbar absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 py-5 z-10 border-b border-gray-400'>
        {["iPhone", "iPad", "services", "ios", "mac", "products", "iPhone", "iPad", "services", "ios", "mac", "products"].map((e,index) => (
          <a key={index} href="" className='text-white cursor-pointer px-5 py-3 font-[500] text-md capitalize'>{e}</a>
        ))}
      </div>
      <div className="absolute text-white font-['Helvetica'] top-40 left-1/2 -translate-x-1/2 text-center">
        <h3 className='masked text-7xl tracking-tighter font-[700]'>macBook pro</h3>
        <h5 className='py-5'>Oh so pro!</h5>
        <p className='text-center w-3/4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, consectetur. Quod, quos alias.</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, 16, 200] }}>
        <OrbitControls />
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr',
        ]} />

        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App