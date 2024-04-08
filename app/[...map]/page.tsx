export default function Page({ params }: { params: { map: string[] } }) {

  const [at_id, name, area] = params.map

  return (
    <>
      <div>유저 at_id: {at_id || "없음"}</div>
      <div>유저 map name: {decodeURI(name) || "없음"}</div>
      <div>유저 map area: {decodeURI(area) || "없음"}</div>
    </>
  );
}
