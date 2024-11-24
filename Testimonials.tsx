export default function Testimonials() {
  const testimonials = [
    {
      content: "The internship program at Cyber Bind completely transformed my career path. The hands-on experience with cutting-edge technologies was invaluable.",
      author: "Muthu Babu S",
      role: "Former Intern, Now Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "Working on real projects during my internship gave me the confidence and skills I needed to succeed in the tech industry.",
      author: "Axin Ricco",
      role: "AI Research Associate",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "The mentorship and guidance I received at Cyber Bind were exceptional. They truly care about developing the next generation of tech leaders.",
      author: "Nivetha",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Hear from our alumni about their journey with Cyber Bind
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white shadow-lg rounded-2xl p-8">
                <div className="flex items-center gap-x-4">
                  <img src={testimonial.image} alt="" className="h-12 w-12 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="mt-6 text-gray-700">
                  <p>"{testimonial.content}"</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}