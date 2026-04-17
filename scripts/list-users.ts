import { prisma } from "../src/lib/prisma";

async function main() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      accounts: { select: { providerId: true, accountId: true } },
    },
  });

  console.log(`\nTotal users: ${users.length}\n`);
  users.forEach((u) => {
    console.log(`- ${u.email}  (${u.name})  created=${u.createdAt.toISOString()}  accounts=${u.accounts.length}`);
  });

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
