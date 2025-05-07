// Requires React in scope (add import if needed for your setup)
// NOTE: Update the logo path as needed for your build setup. Assumes '/apple-touch-icon.png' in public root.
const logo = '/favicon-96x96.png';

/**
 * HeaderBar component for the Family Grocery App.
 * @param user - The current user object.
 * @param onSettings - Callback for settings button click.
 */
export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface HeaderBarProps {
  user: User;
  onSettings: () => void;
}

export const HeaderBar = ({ user, onSettings }: HeaderBarProps) => (
  <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, padding: '0 16px', background: 'var(--color-bg, #FEF4DB)', borderBottom: '1px solid var(--color-bg-alt, #FBF3DB)' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="App Logo" style={{ height: 72, width: 72, borderRadius: '50%' }} />
      <span style={{ fontFamily: 'var(--font-heading, Poppins)', fontWeight: 700, fontSize: 20, marginLeft: 12, color: 'var(--brand-color, #FF5733)' }}>ListNest</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {user.avatarUrl && <img src={user.avatarUrl} alt={user.name} style={{ height: 32, width: 32, borderRadius: '50%', objectFit: 'cover' }} />}
      <button aria-label="Settings" onClick={onSettings} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
        <svg width="24" height="24" fill="none" stroke="var(--color-dark, #2A2E35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      </button>
    </div>
  </header>
); 