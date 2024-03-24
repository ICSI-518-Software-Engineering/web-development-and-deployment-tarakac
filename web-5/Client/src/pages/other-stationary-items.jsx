import { OtherStationaryItemsTable } from "@/components/other-inventory/other-inventory-table";
import { InventoryPageHeader } from "@/components/quick-comp/inventory-page-header";

export const OtherStationaryItemsPage = () => {
  return (
    <div className="relative z-10 h-full w-full overflow-y-scroll">
      <div className=" h-24"></div>
      <InventoryPageHeader heading="Other Items" />
      <div className=" max-w-[1000px]  mx-auto mb-4 main-container text-white rounded-lg overflow-hidden">
        <OtherStationaryItemsTable />
      </div>
    </div>
  );
};
