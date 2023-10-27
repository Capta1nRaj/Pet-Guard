import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      <div className="text-stone-500 py-4 px-3 sm:py-12 sm:px-3">
        <div className="mx-3 sm:mx-20">
          {/* First Aid for Cats */}
          <div className="border-l-[4.8px] mb-4 sm:mb-12 pl-4 sm:pl-12 border-lime-500 border-solid">
            <h1 className="text-neutral-800 text-2xl sm:text-5xl font-bold uppercase">First Aid for Cats</h1>
          </div>
          <div className="">
            <div className="col-span-1 mt-4 sm:mt-12 px-3 sm:px-6">
              <div className="bg-zinc-100 flex p-3 sm:p-6 h-full items-center">
                <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-2 sm:mr-3' />
                <div>
                  <ul className="mb-2 sm:mb-4 space-y-2 sm:space-y-3">
                    <li><span className='text-black font-bold'>Choking: </span>If your cat is choking, carefully open its mouth and remove any visible obstructions. If the obstruction persists, perform the Heimlich maneuver.</li>
                    <li><span className='text-black font-bold'>Injuries: </span>Approach injured cats slowly to avoid bites or scratches. Use a soft cloth or bandage to control bleeding and seek veterinary help.</li>
                    <li><span className='text-black font-bold'>Poisoning:</span> If you suspect poisoning, contact your veterinarian or a poison control hotline immediately. Keep a list of toxic substances out of reach.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* First Aid for Dogs */}
          <div className="my-4 sm:my-12">
            <div className="border-l-[4.8px] mb-4 sm:mb-12 pl-4 sm:pl-12 border-lime-500 border-solid">
              <h1 className="text-neutral-800 text-2xl sm:text-5xl font-bold uppercase">First Aid for Dogs</h1>
            </div>
            <div className="">
              <div className="col-span-1 mt-4 sm:mt-12 px-3 sm:px-6">
                <div className="bg-zinc-100 flex p-3 sm:p-6 h-full items-center">
                  <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-2 sm:mr-3' />
                  <div>
                    <ul className="mb-2 sm:mb-4 space-y-2 sm:space-y-3">
                      <li><span className='text-black font-bold'>Cuts and Wounds:</span> Clean the wound with mild soap and water, apply an antiseptic, and cover it with a clean bandage.</li>
                      <li><span className='text-black font-bold'>Heatstroke:</span> If your dog shows signs of heatstroke (excessive panting, weakness), move it to a cool area, offer water, and seek veterinary help.</li>
                      <li><span className='text-black font-bold'>Fractures:</span> Immobilize the injured limb using a splint or bandage and transport your dog to the vet carefully.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat the same structure for other sections (Cows, Horses, and Goats) */}

          {/* First Aid for Cows */}
          <div className="my-4 sm:my-12">
            <div className="border-l-[4.8px] mb-4 sm:mb-12 pl-4 sm:pl-12 border-lime-500 border-solid">
              <h1 className="text-neutral-800 text-2xl sm:text-5xl font-bold uppercase">First Aid for Cows</h1>
            </div>
            <div className="">
              <div className="col-span-1 mt-4 sm:mt-12 px-3 sm:px-6">
                <div className="bg-zinc-100 flex p-3 sm:p-6 h-full items-center">
                  <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-2 sm:mr-3' />
                  <div>
                    <ul className="mb-2 sm:mb-4 space-y-2 sm:space-y-3">
                      <li><span className='text-black font-bold'>Bloat:</span> If a cow shows signs of bloat (swollen abdomen, difficulty breathing), contact a veterinarian immediately.</li>
                      <li><span className='text-black font-bold'>Calving Difficulties:</span> If a cow is struggling during calving, seek veterinary assistance to prevent complications.</li>
                      <li><span className='text-black font-bold'>Wounds and Injuries:</span> Clean wounds with mild soap and water, apply an antiseptic, and monitor for signs of infection.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* First Aid for Horses */}
          <div className="my-4 sm:my-12">
            <div className="border-l-[4.8px] mb-4 sm:mb-12 pl-4 sm:pl-12 border-lime-500 border-solid">
              <h1 className="text-neutral-800 text-2xl sm:text-5xl font-bold uppercase">First Aid for Horses</h1>
            </div>
            <div className="">
              <div className="col-span-1 mt-4 sm:mt-12 px-3 sm:px-6">
                <div className="bg-zinc-100 flex p-3 sm:p-6 h-full items-center">
                  <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-2 sm:mr-3' />
                  <div>
                    <ul className="mb-2 sm:mb-4 space-y-2 sm:space-y-3">
                      <li><span className='text-black font-bold'>Colic:</span> If your horse shows signs of colic (pawing, rolling, sweating), contact a veterinarian immediately.</li>
                      <li><span className='text-black font-bold'>Lameness:</span> If a horse is lame, restrict movement, and consult with a vet to determine the cause.</li>
                      <li><span className='text-black font-bold'>Wounds and Cuts:</span> Clean wounds with mild soap and water, apply an antiseptic, and bandage if necessary.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* First Aid for Goats */}
          <div className="my-4 sm:my-12">
            <div className="border-l-[4.8px] mb-4 sm:mb-12 pl-4 sm:pl-12 border-lime-500 border-solid">
              <h1 className="text-neutral-800 text-2xl sm:text-5xl font-bold uppercase">First Aid for Goats</h1>
            </div>
            <div className="">
              <div className="col-span-1 mt-4 sm:mt-12 px-3 sm:px-6">
                <div className="bg-zinc-100 flex p-3 sm:p-6 h-full items-center">
                  <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-2 sm:mr-3' />
                  <div>
                    <ul className="mb-2 sm:mb-4 space-y-2 sm:space-y-3">
                      <li><span className='text-black font-bold'>Bloat:</span> If a goat shows signs of bloat (distended abdomen, difficulty breathing), seek veterinary help immediately.</li>
                      <li><span className='text-black font-bold'>Parasites:</span> Administer dewormers as per veterinary recommendations and monitor for signs of parasite infestation.</li>
                      <li><span className='text-black font-bold'>Injuries:</span> Clean wounds with mild soap and water, apply an antiseptic, and monitor for infection.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href={'/emergency'} className='font-bold text-xl sm:text-3xl text-white uppercase bg-red-500 px-4 sm:px-8 py-2 sm:py-4 flex justify-center w-fit m-auto rounded-xl cursor-pointer'>emergency</Link>
          <div style={{ backgroundImage: 'url("/img/testimonial.jpg")', backgroundSize: 'cover' }} className="bg-no-repeat text-stone-500 h-[15rem] sm:h-[30rem] my-4 sm:my-10 py-4 sm:py-12 px-3 sm:px-3 min-w-screen flex justify-end items-center">
            <div className="mx-3 sm:mx-20 max-w-[40rem]">
              <div className="flex flex-wrap justify-center -ml-1 sm:-ml-3 -mr-1 sm:-mr-3">
                <div>
                  <div className="bg-white relative z-[1] p-4 sm:p-12">
                    <div className="overflow-hidden">
                      <div>
                        <div className="text-center flex items-center flex-col">
                          <p className="mb-2 sm:mb-4 md:text-[15px] text-[10px]">By incorporating these guidelines into your pet care routine, you're actively contributing to the health and happiness of your pets. Remember, each pet is unique, and professional advice from your veterinarian is invaluable for tailored care. Explore our blog for in-depth articles, tips, and expert advice on various aspects of pet care. Your journey to being a responsible and loving pet owner begins here!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
