const Home = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-black p-[5.2rem_5.8rem_9.8rem]">
        <img src="/images/meta_icon.svg" alt="logotype" />
        <p className="text-white text-3xl">Power by brain</p>
      </header>
      <main className="w-full h-[810px] bg-black /* bg-[url('/images/bg_image.jpg')] */">
        <div className="flex justify-end p-[2rem_6.4rem]">

          <div>
            <p className="text-white text-7xl mb-[3.2rem]">JOIN MY COMMUNITY <br /> & SOCIAL MEDIA</p>

            <a href="https://t.me/PS_Istomin" className="flex items-center bg-white p-[1.2rem_2rem] rounded-[1rem] cursor-pointer">
              <img className="w-[6.4rem] h-[6.4rem] mr-[3.2rem]" src="/images/avatar.png" alt="avatar" />
              <p className="text-black text-lg leading-normal">Korrado Inganamorte <br /> Petr Istomin</p>
            </a>
          </div>

        </div>
      </main>
    </>
  )
}

export default Home