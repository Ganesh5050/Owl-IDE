import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Github, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        },
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Account created successfully! Welcome to Owl AI!");
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) toast.error(error.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) toast.error(error.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 transition-colors duration-300">
      {/* Neumorphic Card - Compact for no scroll */}
      <div className="w-full max-w-[500px] bg-background rounded-[20px] p-8 md:p-10
        shadow-[rgba(0,0,0,0.08)_0px_0.7px_0.7px_-0.6px,rgba(0,0,0,0.08)_0px_1.8px_1.8px_-1.3px,rgba(0,0,0,0.07)_0px_3.6px_3.6px_-2px,rgba(0,0,0,0.07)_0px_6.8px_6.8px_-2.6px,rgba(0,0,0,0.05)_0px_13.6px_13.6px_-3.3px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]
        dark:shadow-[rgba(0,0,0,0.3)_0px_0.7px_0.7px_-0.6px,rgba(0,0,0,0.3)_0px_1.8px_1.8px_-1.3px,rgba(0,0,0,0.3)_0px_3.6px_3.6px_-2px,rgba(0,0,0,0.3)_0px_6.8px_6.8px_-2.6px,rgba(0,0,0,0.3)_0px_13.6px_13.6px_-3.3px,rgba(0,0,0,0.3)_0px_30px_30px_-4px,rgba(255,255,255,0.05)_0px_3px_1px_0px_inset]
        border border-white/40 dark:border-white/5 relative overflow-hidden transition-shadow duration-300"
      >

        {/* Header with Logo */}
        <div className="text-center space-y-2 mb-6">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img
                src="/logo.png"
                alt="Owl AI"
                className="w-full h-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Create your account
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Start building your ideas today
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSignup}>

          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground/70 ml-1">First name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="John"
                className="w-full bg-background/50 h-10 px-4 rounded-[10px] outline-none text-sm text-foreground placeholder:text-muted-foreground/50
                shadow-[rgba(158,158,158,0.3)_0px_0.7px_0.7px_-0.5px,rgba(158,158,158,0.3)_0px_1.8px_1.8px_-1.1px,rgba(255,255,255,0.8)_0px_1px_1px_0px_inset] 
                dark:shadow-[rgba(0,0,0,0.3)_0px_1px_2px_0px_inset,rgba(255,255,255,0.05)_0px_1px_0px_0px]
                focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground/70 ml-1">Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Doe"
                className="w-full bg-background/50 h-10 px-4 rounded-[10px] outline-none text-sm text-foreground placeholder:text-muted-foreground/50
                shadow-[rgba(158,158,158,0.3)_0px_0.7px_0.7px_-0.5px,rgba(158,158,158,0.3)_0px_1.8px_1.8px_-1.1px,rgba(255,255,255,0.8)_0px_1px_1px_0px_inset] 
                dark:shadow-[rgba(0,0,0,0.3)_0px_1px_2px_0px_inset,rgba(255,255,255,0.05)_0px_1px_0px_0px]
                focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground/70 ml-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full bg-background/50 h-10 px-4 rounded-[10px] outline-none text-sm text-foreground placeholder:text-muted-foreground/50
              shadow-[rgba(158,158,158,0.3)_0px_0.7px_0.7px_-0.5px,rgba(158,158,158,0.3)_0px_1.8px_1.8px_-1.1px,rgba(255,255,255,0.8)_0px_1px_1px_0px_inset] 
              dark:shadow-[rgba(0,0,0,0.3)_0px_1px_2px_0px_inset,rgba(255,255,255,0.05)_0px_1px_0px_0px]
              focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-xs font-semibold text-foreground/70 ml-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-background/50 h-10 px-4 rounded-[10px] outline-none text-sm text-foreground placeholder:text-muted-foreground/50
                shadow-[rgba(158,158,158,0.3)_0px_0.7px_0.7px_-0.5px,rgba(158,158,158,0.3)_0px_1.8px_1.8px_-1.1px,rgba(255,255,255,0.8)_0px_1px_1px_0px_inset] 
                dark:shadow-[rgba(0,0,0,0.3)_0px_1px_2px_0px_inset,rgba(255,255,255,0.05)_0px_1px_0px_0px]
                focus:ring-2 focus:ring-primary/20 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-xs font-semibold text-foreground/70 ml-1">Confirm password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-background/50 h-10 px-4 rounded-[10px] outline-none text-sm text-foreground placeholder:text-muted-foreground/50
                shadow-[rgba(158,158,158,0.3)_0px_0.7px_0.7px_-0.5px,rgba(158,158,158,0.3)_0px_1.8px_1.8px_-1.1px,rgba(255,255,255,0.8)_0px_1px_1px_0px_inset] 
                dark:shadow-[rgba(0,0,0,0.3)_0px_1px_2px_0px_inset,rgba(255,255,255,0.05)_0px_1px_0px_0px]
                focus:ring-2 focus:ring-primary/20 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-[10px] bg-foreground text-background font-semibold text-sm tracking-wide
            shadow-[rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.06)_0px_1px_2px_0px]
            hover:opacity-90 active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-muted/30" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
            <span className="bg-background px-4 text-muted-foreground/70 font-semibold">Or continue with</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 h-11 rounded-[10px] bg-background text-foreground/80 font-medium text-sm border border-transparent
             shadow-[rgba(158,158,158,0.3)_0px_0.7px_0.7px_-0.5px,rgba(158,158,158,0.3)_0px_1.8px_1.8px_-1.1px,rgba(255,255,255,0.8)_0px_1px_1px_0px_inset] 
             dark:shadow-[rgba(0,0,0,0.3)_0px_1px_2px_0px_inset,rgba(255,255,255,0.05)_0px_1px_0px_0px]
            hover:bg-muted/50 transition-all"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
            Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center gap-2 h-11 rounded-[10px] bg-background text-foreground/80 font-medium text-sm border border-transparent
             shadow-[rgba(158,158,158,0.3)_0px_0.7px_0.7px_-0.5px,rgba(158,158,158,0.3)_0px_1.8px_1.8px_-1.1px,rgba(255,255,255,0.8)_0px_1px_1px_0px_inset] 
             dark:shadow-[rgba(0,0,0,0.3)_0px_1px_2px_0px_inset,rgba(255,255,255,0.05)_0px_1px_0px_0px]
            hover:bg-muted/50 transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </button>
        </div>

        {/* Footer Link */}
        <p className="mt-6 text-center text-xs text-muted-foreground font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-foreground hover:underline font-bold">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
