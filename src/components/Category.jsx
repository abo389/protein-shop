import img1 from "../assets/images/80fcf78f-b62a-42bc-8163-60c9459b45c4.jpg";
import img2 from "../assets/images/output.jpg";
import img3 from "../assets/images/output (2).jpg";
import img4 from "../assets/images/output (1).jpg";

export default function Category ()
{
  return <section>
    <h2 className="!text-4xl text-center py-20">التصنيفات</h2>
    <div className="container m-auto flex flex-wrap justify-center gap-5 items-center">
      <div className="card bg-base-100 image-full w-80 category-card">
        <figure>
          <img src={img1} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">بروتين</h2>
          <p>بروتين فشيخ هيخليك جامد</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">اشتر الان</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-80 category-card">
        <figure>
          <img src={img2} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">بروتين</h2>
          <p>بروتين فشيخ هيخليك جامد</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">اشتر الان</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-80 category-card">
        <figure>
          <img src={img3} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">بروتين</h2>
          <p>بروتين فشيخ هيخليك جامد</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">اشتر الان</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-80 category-card">
        <figure>
          <img src={img4} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">بروتين</h2>
          <p>بروتين فشيخ هيخليك جامد</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">اشتر الان</button>
          </div>
        </div>
      </div>
    </div>
  </section>
}