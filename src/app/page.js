'use client'

import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';

export default function Home() {

  const pathname = usePathname()

  const router = useRouter();

  return (
    <div className='bg-white'>
      <Navbar />
      <div style={{ backgroundImage: 'url("/img/hero.jpg")', backgroundSize: 'cover' }} className="flex items-center bg-lime-500 bg-no-repeat text-stone-500 h-[calc(100vh-93px)] py-12 px-3 min-w-screen">
        <div className="mx-20 my-10">
          <div className="flex flex-wrap justify-start -ml-3 -mr-3">
            <div>
              <h1 className="text-neutral-800 text-[5.00rem] leading-none font-bold mb-6 uppercase">Pet Guard</h1>
              <h1 className="text-white text-[2.50rem] leading-none font-bold mb-6 uppercase">Your Pet's Health, Our Priority</h1>
              <p className="text-white text-2xl mb-6">Where Pets Thrive, Care Comes Alive: Your Trusted Vet Partner</p>
              <div className="items-center flex justify-start">
                <Link href="/" className="text-zinc-100 cursor-pointer font-bold mr-12 py-4 px-12 text-center uppercase align-middle border-[1.6px] border-zinc-100 border-solid">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-stone-500 py-12 px-3">
        <div className="mx-20 my-10">
          <div className="flex flex-wrap -ml-6 -mr-6">
            <div className="px-6">
              <div className="relative">
              </div>
            </div>
            <div className="px-6 grid grid-cols-12 gap-12">
              <div className="relative text-stone-500 px-6 col-span-4">
                <Image alt="dog-2" fill src="/img/about.jpg" className="bottom-0 h-[31.25rem] left-0 object-cover absolute top-0 align-middle w-[32rem] overflow-clip" />
              </div>
              <div className="col-span-8">
                <div className="border-l-[4.8px] mb-12 pl-12 border-lime-500 border-solid">
                  <h6 className="text-lime-500 font-bold mb-2 uppercase">About Us</h6>
                  <h1 className="text-neutral-800 text-5xl font-bold uppercase">We Keep Your Pets Happy All Time</h1>
                </div>
                <h4 className="text-2xl font-bold mb-6">Committed to Your Pet's Well-being: Uniting Expertise with Compassion</h4>
                <div className="bg-zinc-100 p-6">
                  <ul className="flex flex-wrap justify-between mb-4">
                    <li className="list-item">
                      <div className="items-start bg-lime-500 text-white cursor-pointer h-10 py-2 px-4 text-center uppercase w-80">Our Mission</div>
                    </li>
                  </ul>
                  <div>
                    <div>
                      <p>At PetGuard, our mission is to provide exceptional veterinary care and support to pets and their owners. We are dedicated to promoting the health and happiness of your beloved companions, through a combination of cutting-edge medical expertise and unwavering compassion. With a team of experienced veterinarians and a commitment to delivering personalized, client-centered service, we aim to ensure that every pet entrusted to our care receives the best treatment available.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-stone-500 py-12 px-3">
        <div className="mx-20">
          <div className="border-l-[4.8px] mb-12 pl-12 border-lime-500 border-solid">
            <h6 className="text-lime-500 font-bold mb-2 uppercase">Features</h6>
            <h1 className="text-neutral-800 text-5xl font-bold uppercase">Our Excellent Pet Care Services</h1>
          </div>
          <div className="grid-cols-2 grid gap-3 -ml-6 -mr-6 -mt-12">
            <div className="col-span-1 mt-12 px-6">
              <div className="bg-zinc-100 flex p-6 h-full items-center">
                <Image src="/img/injection.png" alt="abt" width={100} height={30} className='mr-3' />
                <div>
                  <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Vaccination</h5>
                  <p className="mb-4">Protecting Pets, One Shot at a Time: Ensuring Lifelong Health Through Vaccination.</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-12 px-6">
              <div className="bg-zinc-100 flex p-6 h-full items-center">
                <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-3' />
                <div>
                  <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Emergency Assistance</h5>
                  <p className="mb-4">When every second counts, trust PetGuard for immediate and expert emergency assistance, because your pet's well-being is our top priority.</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-12 px-6">
              <div className="bg-zinc-100 flex p-6 h-full items-center">
                <Image src="/img/food.png" alt="abt" width={100} height={30} className='mr-3' />
                <div>
                  <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Nutritional Guidance</h5>
                  <p className="mb-4">Nourishing Your Pet for a Lifetime of Vitality and Wellness.</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-12 px-6">
              <div className="bg-zinc-100 flex p-6 h-full items-center">
                <Image src="/img/dog.png" alt="abt" width={100} height={30} className='mr-3' />
                <div>
                  <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Healthcare Remiders</h5>
                  <p className="mb-4">Stay on top of your pet's well-being with our convenient healthcare reminders, ensuring their health is never a second thought. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: 'url("/img/testimonial.jpg")', backgroundSize: 'cover' }} className="bg-no-repeat text-stone-500 h-[30rem] my-10 py-12 px-3 min-w-screen flex justify-end items-center">
        <div className="mx-20 max-w-[40rem]">
          <div className="flex flex-wrap justify-end -ml-3 -mr-3">
            <div>
              <div className="bg-white relative z-[1] p-12">
                <div className="overflow-hidden">
                  <div>
                    <div className="float-left">
                      <div className="text-center flex items-center flex-col">
                        <div className="mb-6 relative h-24 w-24">
                          <Image alt="pr" fill src="/img/testimonial-1.jpg" className="h-24 align-middle w-24 overflow-clip" />
                          <div className="items-center bottom-[-2.81rem] flex justify-center left-[20.31rem] absolute right-[17.50rem] top-[6.25rem]">
                            <i className="text-lime-500"></i>
                          </div>
                        </div>
                        <p className="mb-4">We couldn't be happier with the care our furry family member received at PetGuard. The staff's dedication and expertise truly set them apart. Our pet is healthier and happier, thanks to their exceptional service.</p>

                        <h5 className="text-neutral-800 text-xl font-bold mb-2 uppercase">Jane Doe</h5>
                        <span>Doctor</span>
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
