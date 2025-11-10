import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  {
    name: "Ankita Pati",
    email: "ankitapati2615@gmail.com",
    initials: "AP",
  },
  {
    name: "Tanaya T. Kar",
    email: "kartanaya42@gmail.com",
    initials: "TK",
  },
  {
    name: "Balaram Das",
    email: "balaram2004das2004@gmail.com",
    initials: "BD",
  },
  {
    name: "Biswajit Dash",
    email: "Biswajitdash929@gmail.com",
    initials: "BD",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the researchers behind this innovative work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span className="break-all">{member.email}</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
