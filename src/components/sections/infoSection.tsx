export default function InfoSection() {
  return (
    <section
      id="infoSection"
      className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm h-[90vh] flex flex-row m-auto py-8"
    >
      <div className="overflow-hidden flex-[2]">
        <iframe
          style={{border: 'solid rgb(var(--color-text)) 1px'}}
          className="relative z-10"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3723.470428297301!2d105.8397853!3d21.0538653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aa4d44cc8725%3A0x7586ea6c73c21483!2sVietClimb!5e0!3m2!1sen!2s!4v1699001855702!5m2!1sen!2s"
          allowFullScreen={true}
          loading="lazy"
          width={'100%'}
          height={'100%'}
        ></iframe>
      </div>
      <div className="flex flex-col gap-8 flex-1 p-8">
        <h1 className="title-small">ADDRESS</h1>
        <h3 className="subtitle-small">2 Lane 76, An Duong, Tay Ho, Hanoi</h3>
        <h1 className="title-small">BUSINESS HOURS</h1>
        <ul>
          <li>Monday to Friday</li>
          <li>10:00 - 22:00</li>
          <li>Saturday and Sunday</li>
          <li>09:00 - 22:00</li>
        </ul>
      </div>
    </section>
  );
}
