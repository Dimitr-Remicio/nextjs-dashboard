import CustomSlider from '@/app/features/slider';
import { images } from '@/app/lib/placeholder-data';
import Image from 'next/image';


export default function TopProducts() {


  return (
    <div className='flex flex-col w-full p-15 justify-center'>
        <CustomSlider>
          {images.map((image, index) => {
            return <Image key={index} src={image.imgURL} alt={image.imgAlt} width={image.w} height={image.h} />;
          })}
        </CustomSlider>

      <div>
        <div>
          <h2>TOP TOP TOP</h2>
          <h2>TOP TOP TOP</h2>
          <h2>TOP TOP TOP</h2>
        </div>
        <div>
          <h2>TOP TOP TOP</h2>
          <h2>TOP TOP TOP</h2>
          <h2>TOP TOP TOP</h2>
        </div>
      </div>
    </div>
  );
}
