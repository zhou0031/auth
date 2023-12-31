import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/scrollbar.module.css";

export default function NewsCard(news) {
  let obj;
  if (typeof news.photos !== "undefined" && news.photos.length > 0) {
    for (let i = 0; i < news.photos.length; i++) {
      const photoObj = JSON.parse(news.photos[i]);
      if (photoObj.src) {
        obj = photoObj;
        break;
      }
    }
  }
  return (
    <>
      <div
        className={`w-52 h-96 bg-white border border-gray-200 rounded-lg shadow overflow-auto ${styles["my-custom-scrollbar"]}`}
      >
        <Link href={`/news/${news.id}`}>
          {obj?.src && (
            <Image
              src={`https://image.310soft.com?url=${obj.src}`}
              width={150}
              height={100}
              className="w-full "
              alt={obj.alt}
            />
          )}
        </Link>
        <div className="p-2">
          <Link href={`/news/${news.id}`}>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              {news.title}
            </h5>
          </Link>
          <p className="mb-3 text-sm text-gray-400">
            {news.content.toString().slice(0, 60)}
          </p>
          <time
            className="text-xs text-gray-500"
            dateTime={`${news.published_at}`}
          >
            {new Date(news.published_at).toLocaleString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </>
  );
}
