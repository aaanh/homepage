import dynamic from "next/dynamic";

const DynamicEmptyContent = dynamic(() =>
  import("../components/EmptyContent")
);

export default function Empty() {
  return <DynamicEmptyContent />
}
