export default function Map ()
{
  return <>
    <div className="container m-auto">
      <h2 className="!text-4xl text-center py-20">الخريطة</h2>
      <iframe
        className="w-full h-80 rounded-2xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.666707603508!2d31.3667991!3d31.035534300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dcd4046291d%3A0x31a69558172f8768!2z2YPYsdmK2KfYqtmK2YHZiCAtIGNyZWF0ZWl2bw!5e0!3m2!1sar!2seg!4v1738855202564!5m2!1sar!2seg" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </>;
}