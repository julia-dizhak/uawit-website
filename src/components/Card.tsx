import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '~/lib/sanity.image';
import { PostType } from '~/lib/sanity.interfaces';
import { formatDate } from '~/utils';

interface CardProps {
  post: PostType;
}

export default function Card({ post }: CardProps) {
  return (
    <div className="flex flex-col p-2 mt-10">
      {post.mainImage ? (
        <Image
          src={urlForImage(post.mainImage).width(500).height(300).url()}
          height={200}
          width={300}
          alt=""
        />
      ) : (
        <div className="bg-black w-100 h-[200]px" />
      )}
      <div className="bg-slate-100">
        <h3>
          <a href={`/post/${post.slug.current}`}>{post.title}</a>
        </h3>
        <div>
          <PortableText value={post.body} />
        </div>
        <p>{post.excerpt}</p>
        <p>{formatDate(post._createdAt)}</p>
      </div>
    </div>
  );
}
