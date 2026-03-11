"use client";

interface DangerZonePanelProps {
  onDeactivate: () => void;
  onDelete: () => void;
}

export default function DangerZonePanel({
  onDeactivate,
  onDelete,
}: DangerZonePanelProps) {
  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-6 lg:p-8">
      <h2 className="text-xl font-bold text-text-heading mb-6">Danger Zone</h2>

      <div className="space-y-8">
        {/* Deactivate Account */}
        <div>
          <p className="text-base font-semibold text-text-heading">
            Deactivate Account
          </p>
          <p className="text-sm text-text-muted mt-1 max-w-md">
            Temporarily disable your account. You can reactivate anytime by
            signing in. Your data will be preserved.
          </p>
          <button
            onClick={onDeactivate}
            className="mt-4 inline-flex items-center justify-center border border-danger text-danger font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-danger/10 transition-colors"
          >
            Deactivate account
          </button>
        </div>

        {/* Delete Account */}
        <div>
          <p className="text-base font-semibold text-text-heading">
            Delete Account
          </p>
          <p className="text-sm text-text-muted mt-1 max-w-md">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
          <button
            onClick={onDelete}
            className="mt-4 inline-flex items-center justify-center bg-danger hover:bg-danger/90 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
