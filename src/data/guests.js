import { guestList } from './guestList';

export const guests = [

  {
    slug: "ban-be",
    name: "Bạn Mộng Linh",
    prefix: "Kính gửi",
    role: "Người bạn trân quý",
    customNote: "Cảm ơn bạn đã luôn đồng hành, sẻ chia những khoảnh khắc thanh xuân đáng nhớ nhất suốt những năm tháng đại học.",
    relation: "Bạn bè",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    slug: "nguyen-kim-duong",
    name: "Bạn Thân Mến",
    prefix: "Kính gửi",
    role: "Khách Mời Trân Quý",
    customNote: "Cảm ơn bạn đã luôn đồng hành và là một phần đặc biệt trong những năm tháng thanh xuân của Dương.",
    relation: "Khách mời",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    slug: "tran-minh-anh",
    name: "Trần Minh Anh",
    prefix: "Kính gửi",
    role: "Tri kỷ gắn bó",
    customNote: "Chặng đường đại học sẽ không thể trọn vẹn và nhiều tiếng cười đến vậy nếu thiếu đi sự hiện diện và nguồn năng lượng tích cực của bạn.",
    relation: "Bạn thân thiết",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
  },
  {
    slug: "gia-dinh-yeu-thuong",
    name: "Gia Đình Yêu Thương",
    prefix: "Kính gửi",
    role: "Điểm tựa bình yên",
    customNote: "Mỗi bước đi của con hôm nay đều được nâng bước bởi tình yêu thương vô bờ bến và sự hy sinh thầm lặng của cả nhà. Tấm bằng này là món quà con dành tặng Bố Mẹ.",
    relation: "Gia đình",
    avatar: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=300&q=80"
  },
  {
    slug: "thay-co-kinh-yeu",
    name: "Quý Thầy Cô Kính Yêu",
    prefix: "Kính gửi",
    role: "Người dẫn đường tận tụy",
    customNote: "Em xin chân thành gửi lời tri ân sâu sắc nhất đến Thầy Cô vì những tri thức quý báu, sự dìu dắt tâm huyết và ngọn lửa đam mê Thầy Cô đã truyền trao.",
    relation: "Giảng viên hướng dẫn",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80"
  }
];

// Helper xử lý tiền tố danh xưng thông minh từ slug (e.g. anh-tuan, thay-nam, chi-hoa)
const parseSlugSalutation = (slug) => {
  const prefixRules = [
    { prefix: 'co-chu-', title: 'Cô Chú', greetingPrefix: 'Kính gửi', defaultRole: 'Gia đình thân thương' },
    { prefix: 'gia-dinh-', title: 'Gia Đình', greetingPrefix: 'Kính gửi', defaultRole: 'Gia đình thân thương' },
    { prefix: 'thay-co-', title: 'Thầy Cô', greetingPrefix: 'Kính gửi', defaultRole: 'Người thầy kính yêu' },
    { prefix: 'thay-', title: 'Thầy', greetingPrefix: 'Kính gửi', defaultRole: 'Người thầy kính yêu' },
    { prefix: 'co-', title: 'Cô', greetingPrefix: 'Kính gửi', defaultRole: 'Người cô kính yêu' },
    { prefix: 'bac-', title: 'Bác', greetingPrefix: 'Kính gửi', defaultRole: 'Người bác kính mến' },
    { prefix: 'chu-', title: 'Chú', greetingPrefix: 'Kính gửi', defaultRole: 'Người chú kính mến' },
    { prefix: 'anh-', title: 'Anh', greetingPrefix: 'Thân gửi', defaultRole: 'Người anh trân quý' },
    { prefix: 'chi-', title: 'Chị', greetingPrefix: 'Thân gửi', defaultRole: 'Người chị trân quý' },
    { prefix: 'em-', title: 'Em', greetingPrefix: 'Thân gửi', defaultRole: 'Người em thân thiết' },
    { prefix: 'ban-', title: 'Bạn', greetingPrefix: 'Thân gửi', defaultRole: 'Người bạn thân thiết' }
  ];

  for (const rule of prefixRules) {
    if (slug.startsWith(rule.prefix)) {
      const restWords = slug.slice(rule.prefix.length).split('-').filter(Boolean);
      const restFormatted = restWords.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const fullName = restFormatted ? `${rule.title} ${restFormatted}` : rule.title;
      return {
        name: fullName,
        prefix: rule.greetingPrefix,
        role: rule.defaultRole
      };
    }
  }

  // Mặc định: viết hoa chữ cái đầu mỗi từ
  const formatted = slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    name: formatted || 'Bạn Thân Mến',
    prefix: 'Kính gửi',
    role: 'Khách Mời Trân Quý'
  };
};

export const resolveGuest = (slug, searchParams) => {
  // 1. Khởi tạo từ slug mặc định hoặc tìm trong danh sách sẵn có
  const cleanSlug = (slug || 'ban-be').toLowerCase();
  
  // Kiểm tra nếu dùng ID rút gọn trên đường dẫn (ví dụ /graduation/1)
  if (guestList[cleanSlug]) {
    return {
      slug: cleanSlug,
      name: guestList[cleanSlug],
      prefix: 'Kính gửi',
      role: 'Khách mời trân quý',
      relation: 'Khách mời'
    };
  }

  const matched = guests.find((g) => g.slug.toLowerCase() === cleanSlug);

  let baseGuest;
  if (matched) {
    baseGuest = { ...matched };
  } else {
    const parsed = parseSlugSalutation(cleanSlug);
    baseGuest = {
      slug: cleanSlug,
      name: parsed.name,
      prefix: parsed.prefix,
      role: parsed.role,
      relation: 'Khách mời'
    };
  }

  // 2. Nếu có Query Parameters trên URL (?to=... hoặc ?name=..., ?role=..., ?prefix=...) thì ghi đè ưu tiên
  if (searchParams) {
    const queryName = searchParams.get('to') || searchParams.get('name') || searchParams.get('ten');
    const queryRole = searchParams.get('role') || searchParams.get('vaitro') || searchParams.get('tag');
    const queryPrefix = searchParams.get('prefix') || searchParams.get('xungho') || searchParams.get('chucvu');

    if (queryName) {
      const trimmedName = queryName.trim();
      // Nếu queryName là một ID có trong guestList, lấy tên thật, ngược lại lấy chính queryName
      baseGuest.name = guestList[trimmedName] || trimmedName;
    }
    if (queryRole) {
      baseGuest.role = queryRole.trim();
    }
    if (queryPrefix) {
      baseGuest.prefix = queryPrefix.trim();
    }
  }

  return baseGuest;
};

export const getGuestBySlug = (slug) => {
  return resolveGuest(slug, null);
};
