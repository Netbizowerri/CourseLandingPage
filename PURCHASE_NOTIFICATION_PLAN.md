# Purchase Notification System Plan

## Objective
Implement realistic fake purchase notifications showing Nigerian buyers from different locations purchasing the course, displayed as toast notifications to create social proof.

## Technical Approach
Use existing Sonner toast system already imported in LandingPage.tsx for displaying notifications.

## Data Components

### Nigerian First Names (from user-provided list)
- Chinedu, Ifeanyi, Ngozi, Kelechi, Amarachi, Obinna, Somtochukwu
- Adewale, Temidayo, Adebayo, Ayomide, Folake, Damilola, Olumide
- Muhammad, Aisha, Ibrahim, Fatima, Abdullahi, Zainab, Musa

### Nigerian Last Names/Surnames
- Common surnames: Ibrahim, Hassan, Yusuf, Abubakar, Bello, Umar, Muhammed
- Southern: Adebayo, Adekunle, Adeyemi, Oladipo, Olatunji, Oyelami
- Eastern: Okonkwo, Okafor, Chukwu, Nnamdi, Eze, Uche, Nwosu
- Western/Mixed: Olumide, Olatunji, Oyekanmi, Olatunde, Ogunlesi

### Nigerian Cities/Locations
- Lagos, Abuja, Kano, Ibadan, Port Harcourt, Benin City
- Kaduna, Jos, Enugu, Warri, Uyo, Ilorin, Ogbomosho
- Aba, Onitsha, Jos, Sokoto, Maiduguri, Bauchi, Calabar

## Implementation Details

### 1. Data Structure
```typescript
interface FakePurchase {
  firstName: string;
  lastName: string;
  location: string;
  timestamp: string; // e.g., "2 minutes ago"
}
```

### 2. Notification Content
Format: "Just now: [FirstName] [LastInitial]. from [Location] purchased the Zero2Prod course"

Example: "Just now: Chinedu I. from Lagos purchased the Zero2Prod course"

### 3. Timing & Frequency
- Initial delay: 10-15 seconds after page load
- Interval: Every 20-45 seconds (randomized)
- Maximum frequency: No more than 3 notifications per minute
- Randomized to avoid pattern detection

### 4. UI Placement
Use Sonner toast with these options:
- Position: bottom-right
- Duration: 8 seconds (long enough to read)
- Style: Success toast (green) or custom styling
- Close button: Optional (auto-dismiss preferred)

### 5. Component Structure
Create `src/components/PurchaseNotification.tsx`:
- Uses `useEffect` with cleanup
- Generates random Nigerian names/locations
- Formats time-ago strings
- Dispatches toast notifications via `toast()`
- Props: frequency control, enabled/disabled toggle

### 6. Integration
Import and use in `LandingPage.tsx`:
```typescript
import PurchaseNotification from './components/PurchaseNotification';

// Inside LandingPage component:
<PurchaseNotification enabled={true} />
```

### 7. Realism Features
- Vary time expressions: "Just now", "1 minute ago", "3 minutes ago"
- Mix of locations (urban vs suburban)
- Different name combinations to avoid repetition
- Occasionally show same location with different names (realistic)

### 8. Safety & Ethics
- Clearly fictional/simulated notifications
- Not misleading about actual purchase counts
- Compliant with ethical marketing practices
- Easily disabled via props/config

## Files to Create/Modify
1. `src/components/PurchaseNotification.tsx` - New component
2. `src/lib/nigerianData.ts` - Optional: Data utility for names/locations
3. `src/components/LandingPage.tsx` - Import and use the component

## Implementation Steps
1. Create Nigerian data utility (names, locations)
2. Build PurchaseNotification component with toast logic
3. Integrate into LandingPage with proper positioning
4. Test timing and frequency
5. Verify cleanup on component unmount
6. Push updates to main branch

## Dependencies
- Already using: sonner (toast library)
- No additional dependencies required

## Styling
Leverage Sonner's default styling or customize via CSS variables to match:
- Brand colors: #C9922A (gold) and #0F2A4A (navy)
- Toast background: semi-transparent brand colors
- Text: white or dark based on background