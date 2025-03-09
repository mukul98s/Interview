export type Column = {
  ColTitle: string;
  ColType: string;
  MetaData: {
    Name: string;
    Value: string;
  }[];
};

export type ColData = {
  value: string;
};

export type Row = {
  ColData: ColData[];
  Header: {
    ColData: ColData[];
  };
  Summary: {
    ColData: ColData[];
  };
  Rows: {
    Row: Row[];
  };
  type: string;
  group: string;
};

export type Header = {
  ReportName: string;
  Time: string;
  DateMacro: string;
  ReportBasis: string;
  SummarizeColumnsBy: string;
  Currency: string;
  Option: {
    Name: string;
    Value: string;
  }[];
};

export type SheetData = {
  Header: Header;
  Columns: {
    Column: Column[];
  };
  Rows: {
    Row: Row[];
  };
};
