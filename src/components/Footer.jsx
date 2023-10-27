export function Footer() {
    return(
        <div className="bg-zinc-100 text-stone-500 py-12 px-3 mt-20">
  <div className="mx-20">
    <div className="flex flex-wrap justify-around -ml-6 -mr-6 -mt-12">
      <div className="mt-12 px-6">
        <h5 className="border-l-[4.8px] text-neutral-800 text-xl font-bold mb-6 pl-4 uppercase border-lime-500 border-solid">Get In Touch</h5>
        <p className="mb-6 max-w-[800px]">Ready to reach out? We're here to help! Feel free to get in touch with us for all your pet's needs. Your pet's well-being is just a call or click away.</p>
        <p className="mb-2">123 Street, New York, USA</p>
        <p className="mb-2">info@example.com</p>
        <p>+012 345 67890</p>
      </div>
      <div className="mt-12 px-6">
        <h5 className="border-l-[4.8px] text-neutral-800 text-xl font-bold mb-6 pl-4 uppercase border-lime-500 border-solid">Quick Links</h5>
        <div className="flex flex-col justify-start">
          <a href="file:///#" className="cursor-pointer mb-2">Home</a>
          <a href="file:///#" className="cursor-pointer mb-2">Community</a>
          <a href="file:///#" className="cursor-pointer mb-2">Login</a>
        </div>
      </div>
    </div>
    <div className="mt-12 px-6 text-center">
        PetGuard - Your Partner in Pet Health | © 2023. All rights reserved.
      </div>
  </div>
</div>
    )
}