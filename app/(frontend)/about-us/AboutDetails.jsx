import React from 'react'

function AboutDetails() {
  return (
    <div className="items-center flex flex-col">
      <h2 className="font-bold text-[32px] pt-5 pb-5 text-purple-800">Who we are?</h2>
      <div className=' w-[700px] lg:w-[700px] md:w-full sm:w-full pb-5'>
        <p className='text-justify'>Welcome to the Department of Computer Science & Technology (CST) at the National Institute of Engineering and Technology (NIET), Dhaka Campus. As one of the premier private polytechnic institutes in Bangladesh, NIET is renowned for its commitment to excellence in technical education, and the CST department stands as a testament to this dedication.</p>
        <h2 className='font-bold text-[32px] pt-5 pb-5 text-slate-800'>Our Mission</h2>
        <p className='text-justify'>Our mission is to provide top-tier education in computer science and technology, preparing our students to become leaders in the ever-evolving tech landscape. We aim to foster a learning environment that encourages innovation, critical thinking, and practical problem-solving skills.</p>

        <h2 className='font-bold text-[32px] pt-5 pb-5 text-slate-800'>Why Choose CST at NIET?</h2>
        <ol className='list-decimal'>
            <li><span className='font-bold text-teal-700'>Cutting-Edge Curriculum:</span> Our curriculum is designed to keep pace with the rapidly changing technology sector. We offer courses that cover the latest advancements in computer science, software development, artificial intelligence, cybersecurity, and more.</li>
            <li><span className='font-bold text-teal-700'>Experienced Faculty:</span> Our faculty members are experts in their fields, bringing a wealth of knowledge and industry experience to the classroom. They are dedicated to mentoring students and guiding them towards successful careers.</li>
            <li><span className='font-bold text-teal-700'>State-of-the-Art Facilities:</span> Our department boasts modern laboratories equipped with the latest technology and software tools. These facilities provide students with hands-on experience, essential for mastering the practical aspects of computer science and technology.</li>
            <li><span className='font-bold text-teal-700'>Research and Innovation:</span> We encourage our students to engage in research and innovation. Our department is involved in various research projects, and students have the opportunity to work alongside faculty on groundbreaking research.</li>
            <li><span className='font-bold text-teal-700'>Industry Connections:</span> We maintain strong ties with the tech industry, offering students numerous opportunities for internships, workshops, and networking. Our partnerships with leading tech companies ensure that our students are well-prepared for the job market.</li>
            <li><span className='font-bold text-teal-700'>Student Support:</span> At CST, we believe in nurturing our students' overall growth. We offer various support services, including career counseling, academic advising, and extracurricular activities to ensure a well-rounded educational experience.</li>
        </ol>
      </div>
    </div>
  )
}

export default AboutDetails