import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Post } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'

export default function Card({ post }: { post: Post }) {
  return (
    <div className="flex flex-col p-2">
      {post.mainImage ? (
        <Image
          className=""
          src={urlForImage(post.mainImage).width(500).height(300).url()}
          height={200}
          width={300}
          alt=""
        />
      ) : (
        <div className="bg-black w-100 h-[200]px" />
      )}
      <div className=" bg-slate-100">
        <h3 className="">
          <a className="" href={`/post/${post.slug.current}`}>
            {post.title}
          </a>
        </h3>
        <p className="">{post.excerpt}</p>
        <p className="">{formatDate(post._createdAt)}</p>
      </div>
    </div>
  )
}
