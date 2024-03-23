export default function Page({ params }: { params: { at_id: string } }) {
  return <div>유저 at_id: {params.at_id}</div>;
}
