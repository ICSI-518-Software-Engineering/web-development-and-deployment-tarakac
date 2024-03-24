import { InventoryTable } from "@/components/inventory-management/inventoryTable";
import { InventoryPageHeader } from "@/components/quick-comp/inventory-page-header";

export const InventoryManagementPage = () => {
    return (
      <div className="relative z-10 h-full w-full overflow-y-scroll">
        <div className=" h-24"></div>
        <InventoryPageHeader heading="Inventory Management" />
        <div className=" max-w-[1000px] main-container mx-auto mb-4  text-white rounded-lg overflow-hidden">
          <InventoryTable />
        </div>
      </div>
    );
  };