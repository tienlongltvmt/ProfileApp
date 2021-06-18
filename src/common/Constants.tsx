// export const API_URL = 'https://api.cocolux.com';
export const API_URL = 'https://api-lep.csell.com.vn';

export const IMAGE_SIZE = {
  REAL: '.',
  MAX: '-600x600',
  EPIC: '-500x500',
  HIGH: '-400x400',
  MEDIUM: '-300x300',
  LOW: '-200x200',
  MIN: '-100x100'
};

export const TIMEOUT = {
  MAX: 86400000, // 1 day => milliseconds
  MIN: 3600000 // 1 hour => milliseconds
};

export const PRICE_MASK = {
  INPUT: {
    VND: {
      precision: 0,
      separator: ' ',
      delimiter: ',',
      unit: '₫ ',
      suffixUnit: ''
    },
    USD: {
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: '$ ',
      suffixUnit: ''
    },
    HIDE: {
      precision: 0,
      separator: ' ',
      delimiter: ',',
      unit: '',
      suffixUnit: ''
    }
  },
  VND: {
    precision: 0,
    separator: ' ',
    delimiter: ',',
    unit: '',
    suffixUnit: '₫'
  },
  USD: {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: '$ ',
    suffixUnit: ''
  },
  HIDE: {
    precision: 0,
    separator: ' ',
    delimiter: ',',
    unit: '',
    suffixUnit: ''
  }
};

export const ID_KHACH_LE = 0;
export const TYPE_ORDER = {
  NORMAL: 'normal',
  IMPORT: 'import',
  EXPORT: 'export',
  DELIVERY: 'delivery',
  PAYMENT: 'payment'
};

export const NORMAL_ORDER_TYPE = {
  RETAIL: 'retail',
  ORDER: 'order',
  RETURN: 'return'
};

export const ORDER_STATUS = [
  {
    type: TYPE_ORDER.NORMAL,
    list: [
      {
        id: 'draft',
        name: 'Đơn tạm'
      },
      {
        id: 'pending',
        name: 'Chờ xử lý'
      },
      {
        id: 'confirmed',
        name: 'Đang xử lý'
      },
      {
        id: 'processing',
        name: 'Đang xử lý'
      },
      {
        id: 'cancelled',
        name: 'Đã hủy đơn'
      },
      {
        id: 'completed',
        name: 'Hoàn thành'
      },
      {
        id: 'delivering',
        name: 'Đang giao hàng'
      }
    ]
  },
  {
    type: TYPE_ORDER.IMPORT,
    list: [
      {
        id: 'draft',
        name: 'Phiếu tạm'
      },
      {
        id: 'confirmed',
        name: 'Đã nhập hàng'
      },
      {
        id: 'cancelled',
        name: 'Đã hủy phiếu'
      }
    ]
  },
  {
    type: TYPE_ORDER.EXPORT,
    list: [
      {
        id: 'draft',
        name: 'Phiếu tạm'
      },
      {
        id: 'pending',
        name: 'Đang chờ'
      },
      {
        id: 'confirmed',
        name: 'Đã nhận hàng'
      },
      {
        id: 'delivering',
        name: 'Đang chuyển hàng'
      },
      {
        id: 'completed',
        name: 'Đã hoàn thành'
      },
      {
        id: 'cancelled',
        name: 'Đã hủy phiếu'
      }
    ]
  },
  {
    type: TYPE_ORDER.DELIVERY,
    list: [
      // {
      //   id: 'failure',
      //   name: 'Bị lỗi'
      // },
      {
        id: 'pending',
        name: 'Chờ xử lý'
      },
      {
        id: 'picking',
        name: 'Đang lấy hàng'
      },
      {
        id: 're_pick',
        name: 'Chờ lấy lại'
      },
      {
        id: 'picked',
        name: 'Đã lấy hàng'
      },
      {
        id: 'delivering',
        name: 'Đang giao hàng'
      },
      {
        id: 're_delivery',
        name: 'Chờ giao lại'
      },
      // {
      //   // c
      //   id: 'delivery_fail',
      //   name: 'Giao thất bại'
      // },
      {
        id: 'delivered',
        name: 'Giao thành công'
      },
      {
        id: 'pending_return',
        name: 'Chờ chuyển hoàn'
      },
      {
        id: 'returning',
        name: 'Đang chuyển hoàn'
      },
      {
        id: 're_return',
        name: 'Chờ chuyển hoàn lại'
      },
      {
        id: 'confirm_pending_return',
        name: 'Chờ xác nhận hoàn'
      },
      {
        id: 'returned',
        name: 'Đã chuyển hàng'
      },
      {
        id: 'cancelled',
        name: 'Đã huỷ'
      }
      // {
      //   id: 'return_fail',
      //   name: 'Trả hàng thất bại'
      // },
      // {
      //   id: 'refunding',
      //   name: 'Đang chuyển hoàn'
      // },
      // {
      //   id: 're_refund',
      //   name: 'Chờ chuyển hoàn lại'
      // },
      // {
      //   id: 'refunded',
      //   name: 'Đã chuyển hoàn'
      // },
      // {
      //   id: 'cancelled',
      //   name: 'Đã huỷ đơn'
      // },
      // {
      //   id: 'damaged',
      //   name: 'Bị hư hại'
      // },
      // {
      //   id: 'losted',
      //   name: 'Bị mất hàng'
      // }
    ]
  },
  {
    type: TYPE_ORDER.PAYMENT,
    list: [
      {
        id: 'pending',
        name: 'Chờ xử lý'
      },
      {
        id: 'completed',
        name: 'Đã thanh toán'
      },
      {
        id: 'cancelled',
        name: 'Đã hủy phiếu'
      }
    ]
  }
];

export const SORT_LIST = [
  {
    id: 'created_at',
    name: 'Mới nhất',
    value: 'desc'
  },
  {
    id: 'created_at',
    name: 'Cũ nhất',
    value: 'asc'
  }
];
export const STATUS_INVENTORY_TYPE = {
  draft: 'draft',
  pending: 'pending',
  completed: 'completed',
  cancelled: 'cancelled'
};

export const KEY_INVENTORY = [
  {key: STATUS_INVENTORY_TYPE.draft, name: 'Phiếu tạm'},
  {key: STATUS_INVENTORY_TYPE.pending, name: 'Chờ kiểm kho'},
  {key: STATUS_INVENTORY_TYPE.completed, name: 'Đã kiểm kho'},
  {key: STATUS_INVENTORY_TYPE.cancelled, name: 'Đã hủy phiếu'}
];
// cụm thời gian của bộ lọc thời gian
export const DATE_TIME = {
  TODAY: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
  YESTERDAY: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
  SEVENDAYBEFORE: new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() - 7
  ),
  THISMONTH: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
  LASTMONTH: new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate()),
  THISYEAR: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
  LASTYEAR: new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate())
};

export const DATE_TIME_LIST = [
  {
    id: 'TOAN_THOI_GIAN',
    name: 'Toàn thời gian'
  },
  {
    id: 'HOM_NAY',
    name: 'Hôm nay'
  },
  {
    id: 'HOM_QUA',
    name: 'Hôm qua'
  },
  {
    id: 'TUAN_NAY',
    name: 'Tuần này'
  },
  {
    id: 'TUAN_TRUOC',
    name: 'Tuần trước'
  },
  {
    id: 'THANG_NAY',
    name: 'Tháng này'
  },
  {
    id: 'THANG_TRUOC',
    name: 'Tháng trước'
  },
  {
    id: 'NAM_NAY',
    name: 'Năm nay'
  },
  {
    id: 'NAM_TRUOC',
    name: 'Năm trước'
  }
];

export const TYPE_MESSAGE_RESPONSE = [
  {
    id: 'password_incorrect',
    value: 'Mật khẩu cũ không chính xác'
  },
  {
    id: 'update_success',
    value: 'Cập nhật thành công'
  }
];

export const LIST_GENDER = [
  {
    code: 'female',
    name: 'Nữ'
  },
  {
    code: 'male',
    name: 'Nam'
  }
];
export const LIST_TYPES = [
  {
    code: 'individual',
    name: 'Cá Nhân'
  },
  {
    code: 'company',
    name: 'Doanh nghiệp'
  }
  // {
  //   code: 'whosale',
  //   name: 'Khách buôn'
  // }
];

export const LOCATION = {
  city: 'Thành phố',
  district: 'Quận/Huyện',
  ward: 'Phường/xã'
};
export const SCREEN_STRING = {
  createdAt: 'createdAt',
  birthday: 'birthday',
  purchase: 'purchase'
};

export const CONFIG_DATE_FILTER = {
  DASHBOARD: [
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  CUSTOMER: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  NCC: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  HANG_HOA: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  KIEM_KHO: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  DAT_HANG: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  HOA_DON: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  VAN_DON: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  NHAP_HANG: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  CHUYEN_HANG: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  CHI_NHANH: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  NHAN_VIEN: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  VOUCHER: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  SO_QUY: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ],
  KHACH_BUON: [
    {
      id: 'TOAN_THOI_GIAN',
      name: 'Toàn thời gian'
    },
    {
      id: 'HOM_NAY',
      name: 'Hôm nay'
    },
    {
      id: 'HOM_QUA',
      name: 'Hôm qua'
    },
    {
      id: 'TUAN_NAY',
      name: 'Tuần này'
    },
    {
      id: 'TUAN_TRUOC',
      name: 'Tuần trước'
    },
    {
      id: 'THANG_NAY',
      name: 'Tháng này'
    },
    {
      id: 'THANG_TRUOC',
      name: 'Tháng trước'
    },
    {
      id: 'NAM_NAY',
      name: 'Năm nay'
    },
    {
      id: 'NAM_TRUOC',
      name: 'Năm trước'
    },
    {
      id: 'TUY_CHON',
      name: 'Tùy chọn...'
    }
  ]
};

export const CONFIG_SORT_FILTER = {
  CUSTOMER: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    },
    {
      id: 'name',
      name: 'Tên A-Z',
      value: 'desc'
    },
    {
      id: 'name',
      name: 'Tên Z-A',
      value: 'asc'
    }
  ],
  NCC: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    },
    {
      id: 'name',
      name: 'Tên A-Z',
      value: 'desc'
    },
    {
      id: 'name',
      name: 'Tên Z-A',
      value: 'asc'
    }
  ],
  HANG_HOA: [
    {
      id: '',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: '',
      name: 'Cũ nhất',
      value: 'asc'
    }
    // {
    //   id: 'price_type',
    //   name: 'Giá tăng',
    //   value: 'desc'
    // },
    // {
    //   id: 'price_type',
    //   name: 'Giá giảm',
    //   value: 'asc'
    // },
    // {
    //   id: 'name',
    //   name: 'A - Z',
    //   value: 'desc'
    // },
    // {
    //   id: 'name',
    //   name: 'Z - A',
    //   value: 'asc'
    // }
  ],
  KIEM_KHO: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ],
  DAT_HANG: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ],
  HOA_DON: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ],
  VAN_DON: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ],
  NHAP_HANG: [
    {
      id: 'created_at',
      name: 'Ngày tạo mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Ngày tạo cũ nhất',
      value: 'asc'
    }
  ],
  CHUYEN_HANG: [
    {
      id: 'created_at',
      name: 'Ngày tạo mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Ngày tạo cũ nhất',
      value: 'asc'
    }
  ],
  VOUCHER: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ],
  BRANCH: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ],
  QL_NHAN_VIEN: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ],
  SO_QUY: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ],
  KHACH_BUON: [
    {
      id: 'created_at',
      name: 'Mới nhất',
      value: 'desc'
    },
    {
      id: 'created_at',
      name: 'Cũ nhất',
      value: 'asc'
    }
  ]
};

export const CONFIG_PRICE_SHOW = {
  CUSTOMER: [
    {
      id: 'total_price',
      name: 'Tổng bán'
    },
    {
      id: 'total_debt',
      name: 'Nợ cần thu'
    }
  ],
  NCC: [
    {
      id: 'price',
      name: 'Giá bán'
    },
    {
      id: 'price_min',
      name: 'Giá vốn'
    }
  ],
  HANG_HOA: [
    {
      id: 'price',
      name: 'Giá bán'
    },
    {
      id: 'price_min',
      name: 'Giá vốn'
    }
  ]
};

export const BANG_GIA_CHUNG = {
  id: 1000,
  name: 'Bảng giá chung'
};

export const KHACH_LE = {
  id: 0,
  name: 'Khách lẻ'
};

export const BAN_TRUC_TIEP = {
  id: 3,
  name: 'Bán trực tiếp'
};

export const SCREEN_PRODUCT_TYPE = {
  BAN_HANG: 'BAN_HANG',
  HANG_HOA: 'HANG_HOA',
  XUAT_HANG: 'XUAT_HANG',
  NHAP_HANG: 'NHAP_HANG',
  KIEM_KHO: 'KIEM_KHO',
  XUAT_KHO: 'XUAT_KHO'
};
export const CHANNELS = [
  {
    id: 1,
    name: 'Bán online'
  },
  {
    id: 2,
    name: 'Bán trực tiếp'
  },
  {
    id: 3,
    name: 'Khác'
  }
];
export const PAYMENT_METHOT = [
  {
    id: 1,
    name: 'Tiền mặt'
  },
  {
    id: 2,
    name: 'Thẻ'
  },
  {
    id: 3,
    name: 'Chuyển khoản'
  }
];
export const SELECT_METHOD_IMPORTS = [
  {
    id: 1,
    name: 'Nhập Thành Phẩm',
    type: 'item'
  },
  {
    id: 2,
    name: 'Nhập Nguyên liệu',
    type: 'part'
  }
];
