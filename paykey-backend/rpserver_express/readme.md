#database migration 

# delete all db
npx prisma migrate reset

# migrate model DB
npx prisma migrate dev --name change_id_to_string

# seeder

npx prisma db seed

# pus update field database
npx prisma db push

