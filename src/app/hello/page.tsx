import HelloWorld from "@/components/HelloWorld";

type SearchParams = {
  name?: string;
};

export default function Hello({
  searchParams: { name },
}: {
  searchParams: SearchParams;
  }) {

  return (
    <div>
      <div>
        <p>Hello{ name ? `, ${name}` : null }</p>
      </div>
      <HelloWorld name={ name ?? '' } />
    </div>
  )
}
