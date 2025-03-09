import BalanceSheetReport from "@/app/components/business/balance-sheet-report";
import ProfitLossReport from "@/app/components/business/profit-loss-report";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="p-8">
      <Tabs defaultValue="profit-loss">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="profit-loss">Profit Loss</TabsTrigger>
          <TabsTrigger value="balance-sheet">Balance Sheet</TabsTrigger>
        </TabsList>
        <TabsContent value="profit-loss">
          <ProfitLossReport />
        </TabsContent>
        <TabsContent value="balance-sheet">
          <BalanceSheetReport />
        </TabsContent>
      </Tabs>
    </div>
  );
}
