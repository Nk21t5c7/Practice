import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div>
      <div className=" font-[family-name:var(--font-geist-sans)] grid lg:flex lg:flex-row lg:flex-nowrap lg:items-center">
        <Header />
        <main className=" basis-[1024px] flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start p-4 ">
          <h2 className="text-3xl">About</h2>
          <article>
            <h3 className="text-2xl ">Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, fuga voluptas vitae illum magnam delectus, doloremque
              distinctio minima expedita dignissimos molestias. Explicabo
              officia repellendus minus rem veritatis sed magni, nobis quasi
              tempore vel tenetur, repudiandae ipsa! Explicabo, laborum? Enim,
              nulla? Sequi facere saepe fugiat? Quasi voluptas magnam quia id
              temporibus eveniet exercitationem, cupiditate ab ea vitae sed
              provident perspiciatis vel?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              incidunt nisi, laboriosam, nam illum minus dolorum eius, fugit et
              tempore blanditiis hic officiis a doloremque nobis. Rerum impedit
              et aperiam, tempore sequi odio eveniet culpa? Ducimus, aliquid
              suscipit praesentium, illum, aut sequi magnam blanditiis id dicta
              quas aliquam! Amet nulla, tempore facilis minus autem
              necessitatibus dolorem repellendus et incidunt libero, quo
              deleniti asperiores consequuntur error animi dolores. Dicta quasi
              sapiente, amet consequuntur, minus optio, quae fugiat quibusdam
              veritatis aperiam iusto!
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="group relative overflow-hidden">
                <Image
                  src="/images/teddy.jpg"
                  alt="Teddy"
                  width={"150"}
                  height={"300"}
                  className="w-full h-[300px] rounded-2xl object-[50%_5%] block object-cover"
                />
                <p
                  className="bg-[rgba(0%,0%,70%,.75)] p-4 flex justify-center text-center items-center rounded-2xl absolute translate-y-[-100%]
                 inset-0 group-hover:translate-y-0 transition-all duration-400 ease-in-out
                "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur a fugit blanditiis nam totam at voluptatem dolor?
                  Tempora ipsam accusamus ipsum officia eligendi fugiat debitis
                  amet, fugit quia harum reiciendis repellat velit totam atque
                  eius et corrupti doloribus praesentium error. Nulla nobis hic
                  exercitationem dicta labore temporibus praesentium eveniet
                  cum.
                </p>
              </div>
              <div className="group relative transition-all duration-[4000] overflow-hidden">
                <Image
                  src="/images/large.jpg"
                  alt="Clifford"
                  width={"150"}
                  height={"300"}
                  className="w-full h-[300px] object-cover object-[50%_30%] rounded-2xl "
                />
                <p
                  className="bg-[rgba(70%,0%,0%,.75)] p-4 flex justify-center text-center items-center rounded-2xl absolute translate-x-[100%]
                inset-0 group-hover:translate-x-0 transition-all duration-400 ease-in-out"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur a fugit blanditiis nam totam at voluptatem dolor?
                  Tempora ipsam accusamus ipsum officia eligendi fugiat debitis
                  amet, fugit quia harum reiciendis repellat velit totam atque
                  eius et corrupti doloribus praesentium error. Nulla nobis hic
                  exercitationem dicta labore temporibus praesentium eveniet
                  cum.
                </p>
              </div>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
