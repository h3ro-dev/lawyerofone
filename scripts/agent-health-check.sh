#!/bin/bash

echo "🔍 Agent Health Check for Lawyer of One"
echo "======================================="
echo ""

# Check API Setup Progress
echo "📦 API Setup Agent:"
if [ -d "backend" ]; then
    echo "  ✓ Backend directory created"
    if [ -f "backend/src/api/server.ts" ]; then
        echo "  ✓ Server file exists"
    else
        echo "  ⏳ Waiting for server.ts"
    fi
else
    echo "  ⏳ Backend directory not yet created"
fi
echo ""

# Check Design System Progress
echo "🎨 Design System Agent:"
if [ -d "frontend/src/styles" ]; then
    echo "  ✓ Styles directory exists"
    if [ -f "frontend/src/styles/design-system.ts" ]; then
        echo "  ✓ Design system file created"
    else
        echo "  ⏳ Waiting for design-system.ts"
    fi
else
    echo "  ⏳ Styles directory not yet created"
fi
echo ""

# Check Content Strategy Progress
echo "📝 Content Strategy Agent:"
if [ -d "content" ]; then
    echo "  ✓ Content directory created"
    if [ -f "content/copy/homepage.md" ]; then
        echo "  ✓ Homepage copy exists"
    else
        echo "  ⏳ Waiting for homepage.md"
    fi
else
    echo "  ⏳ Content directory not yet created"
fi
echo ""

# Run orchestrator status
echo "📊 Overall Status:"
echo "=================="
node scripts/agent-orchestrator.js | grep -E "(Total tasks:|Completed:|Ready to start:|Blocked:)" 