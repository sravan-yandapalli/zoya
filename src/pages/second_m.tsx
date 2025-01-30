import React from 'react';
import Image from "next/image";
import { Group2 } from '@/components/main/ba';
import Link from 'next/link';

const SecondPage: React.FC = () => {
    return (
        <div className='relative'>
        <div>
            ther sections and components
      <div className="absolute top-[550px] left-[130px] rounded-[50px] w-60 h-[51px] text-mini">
        <link href="/appointments" >
        <b className="absolute h-[36.27%] w-[68.67%] top-[31.82%] left-[15.67%] inline-block">BOOK APPOINTMENT</b>
        </link>
      </div>
      <div className="absolute top-[205px] left-[120px] w-[739px] h-[72.2px] text-[64px] text-black">
        <div className="absolute top-[0px] left-[0px] w-[739px] h-[72.2px]">
          <b className="absolute top-[0px] left-[0px] inline-block w-[739px] h-[72.2px]">ZOYA HOMEO CARE</b>
        </div>
      </div>
      <div className="absolute top-[410px] left-[670px] w-[632.5px] h-[664px]">
        <div className="absolute top-[0px] left-[0px] w-[632.5px] h-[664px]" />
      </div>
      <b className="absolute top-[333px] left-[130px] text-base leading-[173.52%] inline-block text-dimgray-100 w-[578px] h-[187px]">
        At Zoya, we are committed to providing holistic homeopathic care that addresses the root cause of your health concerns. Whether you&apos;re dealing with acute illnesses or chronic conditions, our personalized treatments are designed to help you achieve lasting wellness. Homeopathy focuses on empowering your body&rsquo;s natural healing process using gentle, effective remedies tailored to your needs. Experience the power of nature in restoring balance to your mind and body.
      </b>
      <div className="absolute top-[550px] left-[130px] rounded-[50px] w-60 h-[51px] text-mini">
       
        <Link href="/appointments" legacyBehavior>
          <a className="absolute h-[36.27%] w-[68.67%] top-[31.82%] left-[15.67%] inline-block">
            
          <Group2 property1='default' />
          </a>
        </Link>
      </div>

      <Image className="absolute top-[745.26px] left-[108px] w-[115px] h-[105.7px] object-cover" width={115} height={106} alt="" src="/Group 155.png" />
      <Image className="absolute top-[184px] left-[807px] w-[521px] h-[449px] object-cover" width={521} height={449} alt="" src="/ll 1.svg" />
      <div className="absolute top-[678px] left-[30px] w-[1380px] h-[260.8px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumpurple w-[1380px] h-[260.8px]" />
      </div>
      <div className="absolute top-[742px] left-[62px] rounded-[50%] bg-white w-24 h-[95px]" />
      <b className="absolute top-[744px] left-[168px] inline-block w-[202px] h-[63.4px]">OUR SERVICES</b>
      <b className="absolute top-[777px] left-[168px] text-base inline-block text-dimgray-100 w-[305px] h-[59px]">
        Personalized homeopathic care for acute and chronic conditions, focusing on holistic healing and lasting wellness.
      </b>
      <b className="absolute top-[871px] left-[168px] text-xs inline-block w-[98.3px] h-[50px]">READ MORE</b>
      <Image className="absolute top-[742px] left-[490px] rounded-xl w-[128px] h-[128px]" width={128} height={128} alt="" src="/Group 174.svg" />
      <b className="absolute top-[742px] left-[607px] inline-block w-[327.6px] h-[63.4px]">{`APPOIMENTS & ACCESS`}</b>
      <b className="absolute top-[774px] left-[607px] text-base inline-block text-dimgray-200 w-[333.1px] h-[59.5px]">
        Booking an appointment is simple and convenient. Access expert homeopathic care in-clinic or online, tailored to fit your schedule and needs.
      </b>
      <b className="absolute top-[773px] left-[1060px] text-base inline-block text-dimgray-200 w-[331px] h-[59px]">
        Our homeopathic medications are natural, safe, and free from side effects, designed to stimulate your body&rsquo;s healing process effectively.
      </b>
      <b className="absolute top-[871px] left-[607px] text-xs inline-block w-[98.3px] h-[50px]">READ MORE</b>
      <b className="absolute top-[870px] left-[1063px] text-xs inline-block w-[98.3px] h-[50px]">READ MORE</b>
      <Image className="absolute top-[752px] left-[62px] rounded-[242px] w-[99px] h-[93px] object-cover" width={99} height={93} alt="" src="/Caduceus_Logo_Medical_Symbol_Healthy_Icon_Stock_Vector__Royalty_Free__1527099974___Shutterstock-removebg-preview 2.svg" />
      
      <div className="absolute top-[745px] left-[945px] rounded-[50%] bg-white w-[103px] h-[105px]" />
      <Image className="absolute top-[766px] left-[957px] rounded-[212.5px] w-[93px] h-[78px] object-cover" width={93} height={78} alt="" src="/Download_Free_Vectors__Images__Photos___Videos___Vecteezy-removebg-preview 1.svg" />
      <b className="absolute top-[743px] left-[1060px] inline-block w-[238px] h-[33px]">MEDICATION</b>
      <div className="absolute top-[1072px] left-[316px] w-[808px] h-32 text-dimgray-100">
        <b className="absolute top-[0px] left-[104px] text-[48px] text-black">{`SERVICES & SPACELISTS`}</b>
        <b className="absolute top-[69px] left-[0px] inline-block w-[808px]">content. Lorem ipsum may be used as a placeholder before final copy is available.</b>
        <b className="absolute top-[104px] left-[217px] inline-block w-[373px]">content. Lorem ipsum may be used as</b>
      </div>
      <Image className="absolute h-[0.45%] w-[1.11%] top-[89.38%] right-[86.67%] bottom-[10.18%] left-[12.22%] max-w-full overflow-hidden max-h-full" width={16} height={5} alt="" src="/Vector.png" />
        </div>
        </div>
    );
};

export default SecondPage;