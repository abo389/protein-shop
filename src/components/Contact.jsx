export default function Contact ()
{
  return <>
    <div className="container m-auto">
      <h2 className="!text-4xl text-center py-20">تواصل معنا</h2>
    <form className="flex px-5 flex-col w-full md:w-2/3 m-auto justify-center items-ceter gap-5">
      <input type="text" placeholder="الاسم" className="input input-bordered " />
      <input type="text" placeholder="الإيميل" className="input input-bordered" />
        <textarea className="textarea textarea-bordered" placeholder="الرسالة"></textarea>
        <button type="submit" className="btn btn-neutral">إرسال</button>
    </form>
    </div>
  </>;
}