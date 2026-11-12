ভূমিকা :

TypeScript-এ কোডের নির্ভরযোগ্যতা এবং টাইপ-সেফটি নিশ্চিত করার জন্য কাস্টম ডেটা স্ট্রাকচার তৈরি করা অত্যন্ত গুরুত্বপূর্ণ। এই কাজটি করার জন্য TypeScript আমাদের দুটি শক্তিশালী মাধ্যম দেয়—type (Type Alias) এবং interface। আপাতদৃষ্টিতে এদের কাজ একই মনে হলেও এবং অবজেক্টের গঠন নির্ধারণে উভয়ই ব্যবহৃত হলেও, এদের কার্যক্ষমতা, সিনট্যাক্স এবং অভ্যন্তরীণ আচরণে কিছু মৌলিক পার্থক্য রয়েছে।

Type alias interface দুটোই একধরনের objects of structure. এইটা (type Definition) নির্ধারণ করতে ব্যবহার করা হয়।

Type panel="admin" | "User" এভাবে এসাইনকরা গেলেও কিন্তু interface এভাব এসাইনমেন্ট করা যায় না।
তবে type assign করা data চাইলে interface এ ব্যবহার করা যায়।

type alias of primitive and tuple এর জন্য ব্যবহার করা হয়।
type প্রিমিটিভ ভ্যালু, ইউনিয়ন এবং টাপলসহ যেকোনো কিছুর অ্যালাইয়াস তৈরি করতে পারে

type Status = "pending" | "success" | "error";
type Coordinates = [number, number];

Interface শুধুমাত্র অবজেক্ট-অরিয়েন্টেড স্ট্রাকচারের গঠন করার মধ্যে সীমাবদ্ধ এবং কোনো অবজেক্টের ভেতরে রাখা

ছাড়া এটি সরাসরি ইউনিয়ন বা প্রিমিটিভের অ্যালাইয়াস তৈরি করতে পারে না।
সমর্থিত একই নামের একাধিক interface স্বয়ংক্রিয়ভাবে একত্র হয়ে যায়।
interface extends ব্যবহার করে:

interface Animal { name: string; }

interface Dog extends Animal { bark(): void; }

type ইন্টারসেকশন (&) ব্যবহার করে:

type Animal = { name: string; };

type Dog = Animal & { bark(): void; };

Interface বেছে নেওয়াটা ভালো তার ব্যবহারের রেস্টিকশন কম।

উপসংহার :
পরিশেষে বলা যায়, type এবং interface একে অপরের প্রতিদ্বন্দ্বী নয়, বরং পরিপূরক।
